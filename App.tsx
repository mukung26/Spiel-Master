
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Spiel, View, SystemUser } from './types';
import { INITIAL_CATEGORIES } from './constants';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { SpielCard } from './components/SpielCard';
import { AdminModal } from './components/AdminModal';
import { Toast } from './components/Toast';
import { Sidebar } from './components/Sidebar';
import { ConfirmationModal } from './components/ConfirmationModal';
import { LoginModal } from './components/LoginModal';
import { LandingPage } from './components/LandingPage';
import { SpielDetailModal } from './components/SpielDetailModal';
import { ImageModal } from './components/ImageModal';
import { InputModal } from './components/InputModal';
import { TrashModal } from './components/TrashModal';
import { Loader2, Trash2, MessageSquare, Languages, Bug, X, Plus, Shield, Scissors } from 'lucide-react';
import { ChatView } from './components/ChatView';
import { TranslatorView } from './components/TranslatorView';
import { EditorView } from './components/EditorView';
import { AdminUserManagement } from './components/AdminUserManagement';
import { database, auth, googleProvider } from './firebase';
import { usePresence } from './hooks/usePresence';

const App: React.FC = () => {
  const { currentUser: firebaseUser, activeUsers, loading: authLoading } = usePresence();

  // Local User State - Initialized to null to require login
  const [localUser, setLocalUser] = useState<SystemUser | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Normalize Current User to prevent crashes
  const currentUser = useMemo(() => {
    // Priority 1: Local Admin/User Login
    if (localUser) {
      return {
        uid: localUser.uid || 'local_user_' + Date.now(),
        displayName: localUser.displayName || localUser.username || 'Local User',
        email: localUser.email || localUser.username || 'local_user', 
        photoURL: localUser.photoURL || null,
        isLocal: true,
        role: localUser.role
      };
    }
    // Priority 2: Firebase Google Login
    if (firebaseUser) {
      return {
        uid: firebaseUser.uid,
        displayName: firebaseUser.displayName || 'User',
        email: firebaseUser.email || '', // Ensure string to prevent crash
        photoURL: firebaseUser.photoURL,
        isLocal: false,
        role: null // Role determined by DB sync below
      };
    }
    return null;
  }, [firebaseUser, localUser]);

  const [userSpiels, setUserSpiels] = useState<Spiel[]>([]);
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [isCategoryEditMode, setIsCategoryEditMode] = useState(false);
  const [showTrashModal, setShowTrashModal] = useState(false);
  
  const [categoryInputModal, setCategoryInputModal] = useState<{
    isOpen: boolean;
    type: 'add' | 'edit';
    initialValue: string;
    targetCategory: string | null;
  }>({ isOpen: false, type: 'add', initialValue: '', targetCategory: null });
  
  const [categoryDeleteModal, setCategoryDeleteModal] = useState<{
    isOpen: boolean;
    category: string | null;
  }>({ isOpen: false, category: null });
  
  const [systemRole, setSystemRole] = useState<'admin' | 'user' | null>(null);
  const authSyncRef = useRef<string | null>(null);

  // --- Auth & Role Logic (Crash Proof) ---
  useEffect(() => {
    // 1. If Local User, role is already in object
    if (localUser) {
        setSystemRole(localUser.role);
        return;
    }

    // 2. If No User, clear role
    if (!currentUser || !currentUser.email) {
        setSystemRole(null);
        authSyncRef.current = null;
        return;
    }

    // 3. Google User - Sync with DB safely
    const safeEmail = currentUser.email;
    
    // Prevent re-running if we already synced this email
    if (authSyncRef.current === safeEmail) return;

    try {
        const emailKey = safeEmail.replace(/\./g, ','); // Firebase doesn't allow '.' in keys
        const accountRef = database.ref(`accounts/${emailKey}`);

        accountRef.once('value').then((snapshot) => {
            const data = snapshot.val();
            
            if (!data) {
                // Auto-create 'user' role for new Google logins
                const newUserEntry = {
                    email: safeEmail,
                    role: 'user', // Default role
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                    lastLogin: Date.now(),
                    uid: currentUser.uid,
                    isLocal: false
                };
                accountRef.set(newUserEntry);
                setSystemRole('user');
            } else {
                // Update metadata for existing user
                accountRef.update({
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                    lastLogin: Date.now()
                });
                setSystemRole(data.role || 'user');
            }
            authSyncRef.current = safeEmail; // Mark as synced
        }).catch(err => {
            console.error("Auth DB Error:", err);
            setSystemRole('user'); 
        });
    } catch (e) {
        console.error("Critical Auth Error:", e);
        setSystemRole('user');
    }
  }, [currentUser, localUser]);

  const isAdmin = useMemo(() => systemRole === 'admin', [systemRole]);

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingSpiel, setEditingSpiel] = useState<Spiel | undefined>(undefined);
  const [expandedSpiel, setExpandedSpiel] = useState<Spiel | null>(null);
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'local' | 'synced' | 'cloud' | 'error'>('cloud');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const [modalConfig, setModalConfig] = useState<{show: boolean, title: string, message: string, type: 'success' | 'error' | 'info'}>({
    show: false, title: '', message: '', type: 'info'
  });

  const handleLoginClick = () => setShowLoginModal(true);

  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      setShowLoginModal(false);
    } catch (error) {
      console.error("Login failed", error);
      showToast("Google Login failed");
    }
  };

  const handleLocalLogin = (user: SystemUser) => {
    setLocalUser(user);
    showToast(`Welcome, ${user.displayName || user.username}`);
    setShowLoginModal(false);
  };

  const handleLogout = async () => {
    try {
      // 1. Reset View FIRST to ensure state is queued before unmount/re-render
      setCurrentView(View.HOME);

      // 2. Clear Auth
      if (localUser) {
        setLocalUser(null);
      } else {
        await auth.signOut();
      }
      
      // 3. Reset Local State
      setUserSpiels([]);
      setSystemRole(null);
      authSyncRef.current = null;
      
      showToast("Logged out");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Load Data
  useEffect(() => {
    if (!currentUser?.uid) {
      setUserSpiels([]);
      return;
    }

    setIsGlobalLoading(true);
    
    // Safely reference user data
    const spielsRef = database.ref(`users/${currentUser.uid}/spiels`);
    const handleValueChange = (snapshot: any) => {
      const data = snapshot.val();
      if (data) {
        // Safe mapping to prevent crashes if data is malformed
        const loadedSpiels: Spiel[] = Object.values(data).map((s: any) => ({
            ...s,
            id: s.id || 'unknown_' + Math.random(),
            title: s.title || 'Untitled',
            english: s.english || '',
            brazil: s.brazil || '',
            tags: s.tags || [],
            images: s.images || [],
            category: s.category || 'N/A',
            createdAt: s.createdAt || Date.now(),
            color: s.color || 'bg-white dark:bg-[#202124]'
        }));
        
        loadedSpiels.sort((a, b) => {
            if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
            return b.createdAt - a.createdAt;
        });
        setUserSpiels(loadedSpiels);
      } else {
        setUserSpiels([]);
      }
      setIsGlobalLoading(false);
    };

    const categoriesRef = database.ref(`users/${currentUser.uid}/settings/categories`);
    categoriesRef.once('value').then((snapshot) => {
      const savedCategories = snapshot.val();
      if (savedCategories && Array.isArray(savedCategories)) {
        setCategories(savedCategories);
      } else {
        setCategories(INITIAL_CATEGORIES);
      }
    });

    spielsRef.on('value', handleValueChange, (error: any) => {
      console.error(error);
      setIsGlobalLoading(false);
      setSyncStatus('error');
    });

    return () => {
        spielsRef.off('value', handleValueChange);
    };
  }, [currentUser]);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const allSpiels = useMemo(() => userSpiels, [userSpiels]);

  const filteredSpiels = useMemo(() => {
    return allSpiels.filter(spiel => {
      if (spiel.isDeleted) return false;
      const matchesCategory = selectedCategory === 'All' || spiel.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      // Safe access using OR empty string
      const title = (spiel.title || '').toLowerCase();
      const eng = (spiel.english || '').toLowerCase();
      const bz = (spiel.brazil || '').toLowerCase();
      
      const matchesSearch = 
        title.includes(searchLower) ||
        eng.includes(searchLower) ||
        bz.includes(searchLower) ||
        (spiel.tags || []).some(tag => tag.toLowerCase().includes(searchLower));
      return matchesCategory && matchesSearch;
    });
  }, [allSpiels, selectedCategory, searchQuery]);

  const deletedSpiels = useMemo(() => allSpiels.filter(s => s.isDeleted), [allSpiels]);
  const pinnedSpiels = useMemo(() => filteredSpiels.filter(s => s.isPinned), [filteredSpiels]);
  const otherSpiels = useMemo(() => filteredSpiels.filter(s => !s.isPinned), [filteredSpiels]);

  const scrollToSpiel = (id: string) => {
    if (currentView !== View.HOME) {
      setCurrentView(View.HOME);
      setTimeout(() => {
         const element = document.getElementById(id);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth', block: 'center' });
           element.classList.add('ring-2', 'ring-blue-500');
           setTimeout(() => element.classList.remove('ring-2', 'ring-blue-500'), 2000);
         }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-2', 'ring-blue-500');
        setTimeout(() => element.classList.remove('ring-2', 'ring-blue-500'), 2000);
      }
    }
    setShowMobileSidebar(false);
  };

  const handleSaveSpiel = async (formData: Omit<Spiel, 'id' | 'createdAt'>) => {
    if (!currentUser?.uid) {
      setModalConfig({ show: true, title: 'Login Required', message: 'You must be logged in to create or edit personal templates.', type: 'error' });
      return;
    }

    try {
      if (editingSpiel) {
        const spielRef = database.ref(`users/${currentUser.uid}/spiels/${editingSpiel.id}`);
        await spielRef.set({ ...editingSpiel, ...formData });
        showToast('Template updated');
      } else {
        const spielsRef = database.ref(`users/${currentUser.uid}/spiels`);
        const newRef = spielsRef.push();
        const newOrder = userSpiels.length; 
        const newSpiel: Spiel = { 
          ...formData, 
          id: newRef.key as string, 
          createdAt: Date.now(), 
          isDeleted: false,
          isDefault: false,
          isPinned: false,
          order: newOrder
        };
        await newRef.set(newSpiel);
        showToast('New template created');
      }
      setShowAdminModal(false);
      setEditingSpiel(undefined);
    } catch (error) {
      console.error(error);
      showToast('Error saving template');
    }
  };

  const handleQuickSave = async (id: string, updates: Partial<Spiel>) => {
    if (!currentUser?.uid) return;
    try {
      const spielRef = database.ref(`users/${currentUser.uid}/spiels/${id}`);
      await spielRef.update(updates);
      showToast('Saved');
    } catch (error) {
      console.error("Quick save failed", error);
      showToast("Failed to save changes");
    }
  };

  // --- Category Management Handlers ---

  const saveCategoriesToFirebase = async (newCategories: string[]) => {
    if (!currentUser?.uid) return;
    try {
      await database.ref(`users/${currentUser.uid}/settings/categories`).set(newCategories);
      setCategories(newCategories);
    } catch (e) {
      console.error("Failed to save categories", e);
      showToast("Failed to save categories");
    }
  };

  const openAddCategoryModal = () => {
    setCategoryInputModal({ isOpen: true, type: 'add', initialValue: '', targetCategory: null });
  };

  const openEditCategoryModal = (catName: string) => {
    setCategoryInputModal({ isOpen: true, type: 'edit', initialValue: catName, targetCategory: catName });
  };

  const openDeleteCategoryModal = (catName: string) => {
    setCategoryDeleteModal({ isOpen: true, category: catName });
  };

  const handleCategorySubmit = async (value: string) => {
    const trimmedName = value.trim();
    if (!trimmedName) return;

    if (categoryInputModal.type === 'add') {
      if (categories.includes(trimmedName)) {
        showToast("Category already exists");
        return;
      }
      const newCats = [...categories, trimmedName];
      await saveCategoriesToFirebase(newCats);
      showToast("Category added");

    } else if (categoryInputModal.type === 'edit' && categoryInputModal.targetCategory) {
      const oldName = categoryInputModal.targetCategory;
      if (trimmedName !== oldName) {
        if (categories.includes(trimmedName)) {
          showToast("Category name already exists");
          return;
        }
        const newCats = categories.map(c => c === oldName ? trimmedName : c);
        await saveCategoriesToFirebase(newCats);

        if (currentUser?.uid) {
          const updates: any = {};
          userSpiels.forEach(spiel => {
            if (spiel.category === oldName) {
              updates[`users/${currentUser.uid}/spiels/${spiel.id}/category`] = trimmedName;
            }
          });
          if (Object.keys(updates).length > 0) {
            await database.ref().update(updates);
            showToast(`Updated spiels to "${trimmedName}"`);
          }
        }
      }
    }
    setCategoryInputModal({ ...categoryInputModal, isOpen: false });
  };

  const handleCategoryDeleteConfirm = async () => {
    const catName = categoryDeleteModal.category;
    if (!catName) return;

    const newCats = categories.filter(c => c !== catName);
    await saveCategoriesToFirebase(newCats);

    if (selectedCategory === catName) setSelectedCategory('All');

    if (currentUser?.uid) {
      const updates: any = {};
      userSpiels.forEach(spiel => {
        if (spiel.category === catName) {
          updates[`users/${currentUser.uid}/spiels/${spiel.id}/category`] = 'N/A';
        }
      });
      if (Object.keys(updates).length > 0) {
        await database.ref().update(updates);
      }
      showToast("Category deleted");
    }
    setCategoryDeleteModal({ isOpen: false, category: null });
  };

  const handleTogglePin = async (spiel: Spiel) => {
    if (!currentUser?.uid) {
       showToast("Login to pin items");
       return;
    }
    try {
      const spielRef = database.ref(`users/${currentUser.uid}/spiels/${spiel.id}`);
      await spielRef.set({ ...spiel, isPinned: !spiel.isPinned });
    } catch (e) {
      console.error(e);
      showToast("Failed to pin");
    }
  };

  const handleRestoreSpiel = async (id: string) => {
    if (!currentUser?.uid) return;
    const spiel = userSpiels.find(s => s.id === id);
    if (spiel) {
      const spielRef = database.ref(`users/${currentUser.uid}/spiels/${id}`);
      await spielRef.set({ ...spiel, isDeleted: false });
      showToast('Spiel restored');
    }
  };

  const confirmDelete = async () => {
    if (!itemToDelete || !currentUser?.uid) return;
    const id = itemToDelete;
    const spielRef = database.ref(`users/${currentUser.uid}/spiels/${id}`);
    const spiel = userSpiels.find(s => s.id === id);

    if (spiel?.isDeleted) {
       await spielRef.remove();
       showToast('Spiel permanently deleted');
    } else if (spiel) {
       await spielRef.set({ ...spiel, isDeleted: true });
       showToast('Moved to Trash');
    }
    setItemToDelete(null);
  };

  const handleCardClick = (spiel: Spiel) => {
    if (!spiel.isDefault) {
      setEditingSpiel(spiel);
      setShowAdminModal(true);
    } else {
      setExpandedSpiel(spiel);
    }
  };

  const SidebarContent = () => (
    <>
      <div className="p-4 pl-6 border-b border-gray-100 dark:border-gray-800">
         <div className="space-y-1">
            <button 
                onClick={() => setCurrentView(View.CHAT)} 
                className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${currentView === View.CHAT ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
                <MessageSquare size={14} className={currentView === View.CHAT ? "text-blue-500" : "text-gray-400"} /> 
                <span className={!isAdmin ? "line-through decoration-gray-400 opacity-70" : ""}>Chat AI</span>
            </button>
            <button 
                onClick={() => setCurrentView(View.TRANSLATOR)} 
                className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${currentView === View.TRANSLATOR ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
                <Languages size={14} className={currentView === View.TRANSLATOR ? "text-orange-500" : "text-gray-400"} /> 
                <span className={!isAdmin ? "line-through decoration-gray-400 opacity-70" : ""}>Translator AI</span>
            </button>
           <button 
            onClick={() => setCurrentView(View.EDITOR)} 
            className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${currentView === View.EDITOR ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
           >
             <Scissors size={14} className={currentView === View.EDITOR ? "text-purple-500" : "text-gray-400"} /> Image Editor
           </button>
           
           {isAdmin && (
             <>
               <div className="my-2 border-t border-gray-100 dark:border-gray-800 mx-2"></div>
               <button 
                onClick={() => setCurrentView(View.ADMIN)} 
                className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${currentView === View.ADMIN ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
               >
                 <Shield size={14} className={currentView === View.ADMIN ? "text-purple-500" : "text-gray-400"} /> Administrator
               </button>
             </>
           )}
         </div>
      </div>

      <div className="flex flex-col flex-1 min-h-0">
          <div className="pt-6">
            <div className="px-5 mb-3 flex items-center justify-between group">
              <button 
                onClick={() => {
                  setCurrentView(View.HOME);
                  setShowMobileSidebar(false);
                }}
                className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 w-full text-left"
              >
                Spiels
              </button>
              
              <div className="flex items-center gap-1">
                 <button 
                    onClick={() => setShowTrashModal(true)} 
                    className="p-1.5 rounded-lg transition-all text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300"
                    title="View Trash"
                 >
                    <Trash2 size={16} />
                 </button>

                 <button 
                    onClick={() => { 
                        setEditingSpiel(undefined); 
                        setShowAdminModal(true); 
                        setCurrentView(View.HOME);
                    }} 
                    className="p-1.5 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-all"
                    title="Create Spiel"
                 >
                    <Plus size={16} />
                 </button>
              </div>
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 mx-5 mb-2"></div>

            <div className="px-0">
               <Sidebar 
                  spiels={userSpiels.filter(s => !s.isDeleted)} 
                  onSelectSpiel={scrollToSpiel} 
                  filterText={searchQuery} 
                  variant="user" 
               />
            </div>
          </div>
      </div>
      
      <div className="p-6 border-t border-gray-100 dark:border-gray-800 mt-auto bg-gray-50/50 dark:bg-black/20">
         <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-gray-200 dark:hover:border-slate-700">
           <Bug size={14} className="text-gray-400 group-hover:text-blue-500 mt-0.5" />
           <p className="text-[10px] font-bold text-gray-500 dark:text-gray-500 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
             If there's a bug or improvements, kindly contact <a href="#" className="text-blue-600 dark:text-blue-400 font-black hover:underline">Kong</a>.
           </p>
         </div>
      </div>
    </>
  );

  if (authLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <Loader2 className="animate-spin text-blue-500" size={32} />
      </div>
    );
  }

  // Bypass Landing Page if User is Logged In (which is default now)
  if (!currentUser) {
    return (
      <>
        <LandingPage onLoginClick={() => setShowLoginModal(true)} />
        {showLoginModal && (
          <LoginModal 
            onClose={() => setShowLoginModal(false)} 
            onGoogleLogin={handleGoogleLogin}
            onAdminLogin={handleLocalLogin}
          />
        )}
        {toastMessage && <Toast message={toastMessage} />}
      </>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#f0f2f5] dark:bg-[#202124] transition-colors duration-300 overflow-hidden font-sans relative">
      <Header 
        isAdmin={isAdmin || false} 
        activeUsers={activeUsers} 
        currentUser={currentUser} 
        onLogin={handleLoginClick} 
        onLogout={handleLogout} 
        syncStatus={syncStatus} 
        isSyncing={isGlobalLoading} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onLogoClick={() => setCurrentView(View.HOME)}
      />

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onGoogleLogin={handleGoogleLogin}
          onAdminLogin={handleLocalLogin}
        />
      )}

      {viewingImage && (
        <ImageModal 
          src={viewingImage} 
          onClose={() => setViewingImage(null)} 
          onCopy={showToast}
        />
      )}

      {categoryInputModal.isOpen && (
        <InputModal
          title={categoryInputModal.type === 'add' ? "New Category" : "Rename Category"}
          initialValue={categoryInputModal.initialValue}
          placeholder="Enter category name"
          onConfirm={handleCategorySubmit}
          onCancel={() => setCategoryInputModal({ ...categoryInputModal, isOpen: false })}
        />
      )}
      
      {categoryDeleteModal.isOpen && (
        <ConfirmationModal 
          title="Delete Category?" 
          message={`Are you sure you want to delete "${categoryDeleteModal.category}"? Spiels will be moved to 'N/A'.`}
          onConfirm={handleCategoryDeleteConfirm}
          onCancel={() => setCategoryDeleteModal({ isOpen: false, category: null })}
        />
      )}

      {expandedSpiel && (
        <SpielDetailModal 
          spiel={expandedSpiel}
          onClose={() => setExpandedSpiel(null)}
          onCopy={showToast}
          isAdmin={!expandedSpiel.isDefault}
          onEdit={() => { setExpandedSpiel(null); setEditingSpiel(expandedSpiel); setShowAdminModal(true); }}
          onSave={handleQuickSave}
          onViewImage={setViewingImage}
        />
      )}

      <div className="flex flex-1 overflow-hidden relative">
        <aside className={`
          bg-white dark:bg-[#202124] border-r border-gray-100 dark:border-gray-800 flex-shrink-0 hidden md:flex flex-col z-10 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-72 opacity-100' : 'w-0 opacity-0 overflow-hidden border-none'}
        `}>
          <SidebarContent />
        </aside>

        {showMobileSidebar && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileSidebar(false)}></div>
            <aside className="relative w-72 bg-white dark:bg-[#202124] h-full shadow-2xl flex flex-col transition-all animate-in slide-in-from-left duration-300">
               <div className="p-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-black/20">
                  <h2 className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Navigation</h2>
                  <button onClick={() => setShowMobileSidebar(false)} className="text-gray-400 hover:text-red-500 transition-colors bg-transparent p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <X size={18}/>
                  </button>
               </div>
               <SidebarContent />
            </aside>
          </div>
        )}

        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          {currentView === View.HOME ? (
            <>
              <div className="bg-[#f0f2f5]/90 dark:bg-[#202124]/90 backdrop-blur-md z-20 px-4 sm:px-8 pt-6 pb-2">
                <div className="w-full mx-auto space-y-4">
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1 flex justify-center">
                      <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    </div>
                  </div>
                  
                  <div className="w-full border-t border-gray-200 dark:border-gray-800 pt-2">
                      <CategoryFilter 
                        categories={categories} 
                        selected={selectedCategory} 
                        onSelect={setSelectedCategory} 
                        isAdmin={true} 
                        onReorder={saveCategoriesToFirebase}
                        isEditMode={isCategoryEditMode}
                        onToggleEditMode={() => setIsCategoryEditMode(!isCategoryEditMode)}
                        onAddCategory={openAddCategoryModal}
                        onEditCategory={openEditCategoryModal}
                        onDeleteCategory={openDeleteCategoryModal}
                      />
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 sm:px-8 scroll-smooth">
                <div className="w-full pb-24 mx-auto">
                  
                  {userSpiels.length === 0 && !isGlobalLoading && (
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in slide-in-from-bottom-4">
                        <div className="w-24 h-24 bg-white dark:bg-[#303134] rounded-full flex items-center justify-center shadow-xl mb-6">
                            <Plus size={48} className="text-gray-300 dark:text-gray-600" />
                        </div>
                        <h2 className="text-2xl font-black text-gray-800 dark:text-gray-200 mb-2">You don't have spiels yet</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
                            Start building your personal library of response templates. They will appear here like sticky notes.
                        </p>
                        <button 
                            onClick={() => { setEditingSpiel(undefined); setShowAdminModal(true); }}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1"
                        >
                            <Plus size={20} />
                            Create your first spiel
                        </button>
                    </div>
                  )}
                  
                    {pinnedSpiels.length > 0 && (
                        <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pinned</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {pinnedSpiels.map((spiel) => (
                            <SpielCard 
                                key={spiel.id} 
                                spiel={spiel} 
                                onCopy={showToast} 
                                isAdmin={!spiel.isDefault} 
                                onClick={() => handleCardClick(spiel)}
                                onDelete={() => setItemToDelete(spiel.id)} 
                                onRestore={() => handleRestoreSpiel(spiel.id)}
                                onPin={() => handleTogglePin(spiel)}
                                onExpand={() => setExpandedSpiel(spiel)}
                                onViewImage={setViewingImage}
                                isEditMode={isEditMode}
                            />
                            ))}
                        </div>
                        <div className="my-8 border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                    )}

                    {pinnedSpiels.length > 0 && otherSpiels.length > 0 && (
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Others</span>
                        </div>
                    )}

                    {userSpiels.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {otherSpiels.map((spiel) => (
                                <SpielCard 
                                    key={spiel.id} 
                                    spiel={spiel} 
                                    onCopy={showToast} 
                                    isAdmin={!spiel.isDefault} 
                                    onClick={() => handleCardClick(spiel)}
                                    onDelete={() => setItemToDelete(spiel.id)} 
                                    onRestore={() => handleRestoreSpiel(spiel.id)} 
                                    onPin={() => handleTogglePin(spiel)}
                                    onExpand={() => setExpandedSpiel(spiel)}
                                    onViewImage={setViewingImage}
                                    isEditMode={isEditMode}
                                />
                            ))}
                        </div>
                    )}
                    
                    {filteredSpiels.length === 0 && userSpiels.length > 0 && (
                        <div className="text-center py-20 opacity-50">
                        <p>No spiels match your search.</p>
                        </div>
                    )}

                </div>
              </div>
            </>
          ) : (
            <div className="h-full w-full overflow-hidden bg-[#f0f2f5] dark:bg-[#202124]">
               {currentView === View.CHAT && <ChatView user={currentUser} isAdmin={isAdmin || false} />}
               {currentView === View.TRANSLATOR && <TranslatorView isAdmin={isAdmin || false} />}
               {currentView === View.EDITOR && <EditorView />}
               {currentView === View.ADMIN && (
                 <AdminUserManagement currentUserEmail={currentUser?.email || currentUser?.displayName || 'Admin'} />
               )}
            </div>
          )}
        </main>
      </div>

      {showTrashModal && (
        <TrashModal 
            deletedSpiels={deletedSpiels}
            onClose={() => setShowTrashModal(false)}
            onRestore={handleRestoreSpiel}
            onDeleteForever={(id) => setItemToDelete(id)}
        />
      )}

      {showAdminModal && (
        <AdminModal 
          categories={categories} 
          onClose={() => setShowAdminModal(false)} 
          onSubmit={handleSaveSpiel} 
          initialData={editingSpiel} 
          currentSpiels={userSpiels}
          isAdmin={isAdmin}
        />
      )}
      {itemToDelete && (
        <ConfirmationModal 
            title={userSpiels.find(s => s.id === itemToDelete)?.isDeleted ? "Delete Forever?" : "Move to Trash?"} 
            message={userSpiels.find(s => s.id === itemToDelete)?.isDeleted ? "This action cannot be undone." : "You can restore this later from the Trash."}
            onConfirm={confirmDelete} 
            onCancel={() => setItemToDelete(null)} 
        />
      )}
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
};

export default App;

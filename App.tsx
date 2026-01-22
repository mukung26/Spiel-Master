
import React, { useState, useMemo, useEffect } from 'react';
import { Spiel, View } from './types';
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
import { Loader2, Trash2, ArchiveRestore, MessageSquare, Languages, Bug, X, User, Pin, PlusCircle, LayoutGrid, Pencil, Check, Scissors, Plus } from 'lucide-react';
import { ChatView } from './components/ChatView';
import { TranslatorView } from './components/TranslatorView';
import { EditorView } from './components/EditorView';
import { database, auth, googleProvider } from './firebase';
import { usePresence } from './hooks/usePresence';

const ADMIN_EMAILS = [
  "jerwincruspero611@gmail.com",
  "jcruspero3263@gmail.com",
  "segagt505@shopeemobile-external.com"
];

const App: React.FC = () => {
  const { currentUser: firebaseUser, activeUsers, loading: authLoading } = usePresence();

  const [customAdminUser, setCustomAdminUser] = useState<any | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const currentUser = useMemo(() => {
    return customAdminUser || firebaseUser;
  }, [firebaseUser, customAdminUser]);

  const [userSpiels, setUserSpiels] = useState<Spiel[]>([]);
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  
  const [isEditMode, setIsEditMode] = useState(false);
  
  const isAdmin = useMemo(() => {
    if (customAdminUser) {
      return customAdminUser.email === 'admin@internal';
    }
    return currentUser?.email && ADMIN_EMAILS.includes(currentUser.email);
  }, [currentUser, customAdminUser]);

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingSpiel, setEditingSpiel] = useState<Spiel | undefined>(undefined);
  const [expandedSpiel, setExpandedSpiel] = useState<Spiel | null>(null);
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const [showTrash, setShowTrash] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'local' | 'synced' | 'cloud' | 'error'>('cloud');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const [modalConfig, setModalConfig] = useState<{show: boolean, title: string, message: string, type: 'success' | 'error' | 'info'}>({
    show: false, title: '', message: '', type: 'info'
  });

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      setShowLoginModal(false);
    } catch (error) {
      console.error("Login failed", error);
      showToast("Google Login failed");
    }
  };

  const handleAdminLogin = (userType: string) => {
    if (userType === 'Admin') {
      const mockAdmin = {
        uid: 'admin_local_user',
        displayName: 'Administrator',
        email: 'admin@internal',
        photoURL: null,
      };
      setCustomAdminUser(mockAdmin);
      showToast("Welcome, Administrator");
    } else {
      const mockUser = {
        uid: 'credential_local_user',
        displayName: 'User',
        email: 'user@internal',
        photoURL: null,
      };
      setCustomAdminUser(mockUser);
      showToast("Welcome, User");
    }
    setShowLoginModal(false);
  };

  const handleLogout = async () => {
    try {
      if (customAdminUser) {
        setCustomAdminUser(null);
      } else {
        await auth.signOut();
      }
      setUserSpiels([]);
      showToast("Logged out");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    if (!currentUser?.uid) {
      setUserSpiels([]);
      return;
    }

    setIsGlobalLoading(true);
    const spielsRef = database.ref(`users/${currentUser.uid}/spiels`);
    
    const handleValueChange = (snapshot: any) => {
      const data = snapshot.val();
      if (data) {
        const loadedSpiels: Spiel[] = Object.values(data);
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

  const allSpiels = useMemo(() => {
    return userSpiels;
  }, [userSpiels]);

  const filteredSpiels = useMemo(() => {
    return allSpiels.filter(spiel => {
      const isDeleted = !!spiel.isDeleted;
      if (showTrash && !isDeleted) return false;
      if (!showTrash && isDeleted) return false;
      const matchesCategory = selectedCategory === 'All' || spiel.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        spiel.title.toLowerCase().includes(searchLower) ||
        spiel.english.toLowerCase().includes(searchLower) ||
        spiel.brazil.toLowerCase().includes(searchLower) ||
        spiel.tags?.some(tag => tag.toLowerCase().includes(searchLower));
      return matchesCategory && matchesSearch;
    });
  }, [allSpiels, selectedCategory, searchQuery, showTrash]);

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

    if (showTrash) {
      await spielRef.remove();
      showToast('Spiel permanently deleted');
    } else {
      const spiel = userSpiels.find(s => s.id === id);
      if (spiel) {
        await spielRef.set({ ...spiel, isDeleted: true });
        showToast('Moved to Trash');
      }
    }
    setItemToDelete(null);
  };

  const SidebarContent = () => (
    <>
      <div className="p-4 pl-6 border-b border-gray-100 dark:border-gray-800">
         <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">AI Tools</h3>
         <div className="space-y-1">
           <button 
            onClick={() => setCurrentView(View.CHAT)} 
            className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${currentView === View.CHAT ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
           >
             <MessageSquare size={14} className={currentView === View.CHAT ? "text-blue-500" : "text-gray-400"} /> Chat AI
           </button>
           <button 
            onClick={() => setCurrentView(View.TRANSLATOR)} 
            className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${currentView === View.TRANSLATOR ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
           >
             <Languages size={14} className={currentView === View.TRANSLATOR ? "text-orange-500" : "text-gray-400"} /> Translator AI
           </button>
           <button 
            onClick={() => setCurrentView(View.EDITOR)} 
            className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${currentView === View.EDITOR ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
           >
             <Scissors size={14} className={currentView === View.EDITOR ? "text-purple-500" : "text-gray-400"} /> Image Editor
           </button>
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

  if (!currentUser) {
    return (
      <>
        <LandingPage onLoginClick={() => setShowLoginModal(true)} />
        {showLoginModal && (
          <LoginModal 
            onClose={() => setShowLoginModal(false)} 
            onGoogleLogin={handleGoogleLogin}
            onAdminLogin={handleAdminLogin}
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
          onAdminLogin={handleAdminLogin}
        />
      )}

      {viewingImage && (
        <ImageModal 
          src={viewingImage} 
          onClose={() => setViewingImage(null)} 
          onCopy={showToast}
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
              <div className="bg-[#f0f2f5]/90 dark:bg-[#202124]/90 backdrop-blur-md z-20 px-4 sm:px-8 pt-6 pb-4">
                <div className="w-full mx-auto">
                  <div className="mb-6 flex justify-center"><SearchBar value={searchQuery} onChange={setSearchQuery} /></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1 overflow-hidden flex items-center gap-2">
                      <CategoryFilter 
                        categories={categories} 
                        selected={selectedCategory} 
                        onSelect={setSelectedCategory} 
                        isAdmin={true} 
                        onReorder={setCategories}
                        isEditMode={isEditMode}
                      />
                      <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                      
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setIsEditMode(!isEditMode)} 
                          className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all ${
                            isEditMode 
                              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300' 
                              : 'bg-white text-gray-500 dark:bg-[#303134] hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                          title={isEditMode ? "Finish Editing" : "Manage Categories"}
                        >
                          {isEditMode ? <Check size={16} /> : <Pencil size={16} />}
                        </button>
                        
                        <button 
                          onClick={() => setShowTrash(!showTrash)} 
                          className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all ${
                            showTrash 
                              ? 'bg-red-600 text-white shadow-md ring-2 ring-red-300' 
                              : 'bg-white text-gray-500 dark:bg-[#303134] hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                          title={showTrash ? "Hide Trash" : "Show Trash"}
                        >
                          {showTrash ? <ArchiveRestore size={16} /> : <Trash2 size={16} />}
                        </button>

                        {!showTrash && (
                          <button onClick={() => { setEditingSpiel(undefined); setShowAdminModal(true); }} className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white w-9 h-9 rounded-lg shadow-lg flex items-center justify-center transition-all">
                            <PlusCircle size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 sm:px-8 scroll-smooth">
                <div className="w-full pb-24 mx-auto">
                  
                  {userSpiels.length === 0 && !isGlobalLoading && (
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in slide-in-from-bottom-4">
                        <div className="w-24 h-24 bg-white dark:bg-[#303134] rounded-full flex items-center justify-center shadow-xl mb-6">
                            <LayoutGrid size={48} className="text-gray-300 dark:text-gray-600" />
                        </div>
                        <h2 className="text-2xl font-black text-gray-800 dark:text-gray-200 mb-2">You don't have spiels yet</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
                            Start building your personal library of response templates. They will appear here like sticky notes.
                        </p>
                        <button 
                            onClick={() => { setEditingSpiel(undefined); setShowAdminModal(true); }}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1"
                        >
                            <PlusCircle size={20} />
                            Create your first spiel
                        </button>
                    </div>
                  )}
                  
                    {pinnedSpiels.length > 0 && !showTrash && (
                        <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <Pin size={12} className="text-gray-400" />
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pinned</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {pinnedSpiels.map((spiel) => (
                            <SpielCard 
                                key={spiel.id} 
                                spiel={spiel} 
                                onCopy={showToast} 
                                isAdmin={!spiel.isDefault} 
                                onEdit={() => { setEditingSpiel(spiel); setShowAdminModal(true); }} 
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

                    {pinnedSpiels.length > 0 && !showTrash && otherSpiels.length > 0 && (
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Others</span>
                        </div>
                    )}

                    {userSpiels.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {(showTrash ? filteredSpiels : otherSpiels).map((spiel) => (
                                <SpielCard 
                                    key={spiel.id} 
                                    spiel={spiel} 
                                    onCopy={showToast} 
                                    isAdmin={!spiel.isDefault} 
                                    isTrashView={showTrash} 
                                    onEdit={() => { setEditingSpiel(spiel); setShowAdminModal(true); }} 
                                    onDelete={() => setItemToDelete(spiel.id)} 
                                    onRestore={() => handleRestoreSpiel(spiel.id)} 
                                    onPin={!showTrash ? () => handleTogglePin(spiel) : undefined}
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
               {currentView === View.CHAT && <ChatView user={currentUser} />}
               {currentView === View.TRANSLATOR && <TranslatorView />}
               {currentView === View.EDITOR && <EditorView />}
            </div>
          )}
        </main>
      </div>

      {showAdminModal && (
        <AdminModal 
          categories={categories} 
          onClose={() => setShowAdminModal(false)} 
          onSubmit={handleSaveSpiel} 
          initialData={editingSpiel} 
          currentSpiels={userSpiels} 
        />
      )}
      {itemToDelete && <ConfirmationModal title={showTrash ? "Delete Forever?" : "Move to Trash?"} message="This action is managed via your personal workspace." onConfirm={confirmDelete} onCancel={() => setItemToDelete(null)} />}
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
};

export default App;

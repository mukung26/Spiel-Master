import React, { useState, useMemo, useEffect } from 'react';
import { Spiel } from './types';
import { SPIELS, INITIAL_CATEGORIES } from './constants';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { SpielCard } from './components/SpielCard';
import { AdminModal } from './components/AdminModal';
import { Toast } from './components/Toast';
import { Sidebar } from './components/Sidebar';
import { MessageModal } from './components/MessageModal';
import { ConfirmationModal } from './components/ConfirmationModal';
import { Loader2, Trash2, ArchiveRestore } from 'lucide-react';

// Firebase & Presence
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { usePresence } from './hooks/usePresence';

// Robust URL helper
const constructUrl = (path: string) => {
  // Hardcode base for safety as requested
  const base = "https://spiel-master-1a1df-default-rtdb.asia-southeast1.firebasedatabase.app";
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

// Define Admins here
const ADMIN_EMAILS = [
  "admin@shopee.com", 
  "your-email@gmail.com" // TODO: Add your google email here to be admin
];

const App: React.FC = () => {
  // Presence Hook
  const { currentUser, activeUsers } = usePresence();

  // State
  const [spiels, setSpiels] = useState<Spiel[]>(SPIELS);
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  
  // Derived Admin State
  const isAdmin = useMemo(() => {
    return currentUser?.email && ADMIN_EMAILS.includes(currentUser.email);
  }, [currentUser]);

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingSpiel, setEditingSpiel] = useState<Spiel | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  
  // View Mode: Active or Trash
  const [showTrash, setShowTrash] = useState(false);

  // Delete Confirmation State
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [syncStatus, setSyncStatus] = useState<'local' | 'synced' | 'cloud' | 'error'>('local');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Modal State
  const [modalConfig, setModalConfig] = useState<{show: boolean, title: string, message: string, type: 'success' | 'error' | 'info'}>({
    show: false, title: '', message: '', type: 'info'
  });

  // Dark Mode Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Helper to show modal
  const showModal = (title: string, message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setModalConfig({ show: true, title, message, type });
  };

  // Helper to show loading
  const startLoading = (msg: string) => {
    setLoadingMessage(msg);
    setIsGlobalLoading(true);
  };

  const stopLoading = () => {
    setIsGlobalLoading(false);
    setLoadingMessage('');
  };

  // Fetch from Cloud
  useEffect(() => {
    const initData = async () => {
      const url = constructUrl('/spiels.json');
      console.log("Fetching from:", url);
      
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data) {
             const loadedSpiels: Spiel[] = Object.entries(data).map(([key, value]: [string, any]) => {
               // Ensure ID matches Key
               return { ...value, id: key };
             });

             const validSpiels = loadedSpiels.filter(s => s && s.title);
             validSpiels.sort((a, b) => b.createdAt - a.createdAt);
             setSpiels(validSpiels);
             setSyncStatus('cloud');
          } else {
             setSpiels([]);
             setSyncStatus('cloud'); 
          }
        } else {
          console.error("Fetch Error:", res.status);
          setSyncStatus('error');
        }
      } catch (e) {
        console.error("Fetch failed", e);
        setSyncStatus('error');
      }
    };
    initData();
  }, []);

  // Filter Logic
  const filteredSpiels = useMemo(() => {
    return spiels.filter(spiel => {
      // Trash Filter Logic
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
  }, [spiels, selectedCategory, searchQuery, showTrash]);

  // Scroll Handler
  const scrollToSpiel = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toast Handler
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Auth Handlers
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      showToast('Welcome back!');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/unauthorized-domain') {
        const domain = window.location.hostname;
        showModal(
            'Authorized Domain Needed', 
            `Your current domain (${domain}) is not authorized in Firebase Console.\n\n` + 
            `1. Go to Firebase Console -> Build -> Authentication -> Settings -> Authorized Domains\n` +
            `2. Add Domain: ${domain}`,
            'error'
        );
      } else if (error.code === 'auth/popup-closed-by-user') {
        showToast('Sign-in cancelled');
      } else {
        showToast('Login failed: ' + error.message);
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowTrash(false); 
    showToast('Logged out');
  };

  // Cloud Helpers
  const syncToCloud = async (spiel: Spiel) => {
     const url = constructUrl(`/spiels/${encodeURIComponent(spiel.id)}.json`);
     try {
       await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(spiel)
       });
     } catch(e) { console.error("Sync failed", e); }
  };

  // Generic Patch Helper for Soft Delete / Restore
  const patchCloud = async (id: string, data: Partial<Spiel>): Promise<boolean> => {
     const url = constructUrl(`/spiels/${encodeURIComponent(id)}.json`);
     try {
       await fetch(url, {
         method: 'PATCH',
         body: JSON.stringify(data)
       });
       return true;
     } catch(e) {
       console.error("Patch failed", e);
       return false;
     }
  };

  const permanentDeleteFromCloud = async (id: string): Promise<{ success: boolean; error?: string }> => {
     const url = constructUrl(`/spiels/${encodeURIComponent(id)}.json`);
     console.log(`[DELETE] Attempting to delete: ${url}`);
     
     try {
       const controller = new AbortController();
       const timeoutId = setTimeout(() => controller.abort(), 15000); 

       const res = await fetch(url, {
         method: 'DELETE',
         signal: controller.signal
       });
       clearTimeout(timeoutId);
       
       if (!res.ok) {
         console.error('[DELETE] Failed with status:', res.status, res.statusText);
         return { success: false, error: `Server returned ${res.status}: ${res.statusText}` };
       }
       
       return { success: true };
     } catch(e: any) { 
       console.error("[DELETE] Network error", e);
       return { success: false, error: e.message || "Network Error" };
     }
  };

  // CRUD Handlers
  const handleSaveSpiel = (formData: Omit<Spiel, 'id' | 'createdAt'>) => {
    let newSpiel: Spiel;
    let newSpielsList: Spiel[];

    if (editingSpiel) {
      newSpiel = { ...editingSpiel, ...formData };
      newSpielsList = spiels.map(s => s.id === editingSpiel.id ? newSpiel : s);
      showToast('Spiel updated successfully');
    } else {
      newSpiel = {
        ...formData,
        id: `gen-${Date.now()}`,
        createdAt: Date.now(),
        isDeleted: false
      };
      newSpielsList = [newSpiel, ...spiels];
      showToast('New spiel created');
    }
    
    setSpiels(newSpielsList);
    setShowAdminModal(false);
    setEditingSpiel(undefined);
    syncToCloud(newSpiel);
  };

  // Trigger Delete Modal
  const requestDeleteSpiel = (id: string) => {
    setItemToDelete(id);
  };

  // Handle Restore
  const handleRestoreSpiel = async (id: string) => {
    const previousSpiels = [...spiels];
    // Optimistic Update
    setSpiels(prev => prev.map(s => s.id === id ? { ...s, isDeleted: false } : s));
    showToast('Restoring spiel...');

    const success = await patchCloud(id, { isDeleted: false });
    
    if (success) {
      showToast('Spiel restored to main list');
    } else {
      setSpiels(previousSpiels);
      showToast('Failed to restore');
    }
  };

  // Confirm Delete Action (Handles both Soft and Permanent)
  const confirmDelete = async () => {
    if (!itemToDelete) return;

    const id = itemToDelete;
    setIsDeleting(true);

    const previousSpiels = [...spiels];
    
    if (showTrash) {
      // PERMANENT DELETE (From Trash)
      // Optimistic update
      setSpiels(prev => prev.filter(s => s.id !== id));
      
      const result = await permanentDeleteFromCloud(id);
      
      if (result.success) {
        showToast('Spiel permanently deleted');
      } else {
        setSpiels(previousSpiels);
        showModal('Delete Failed', `Could not delete from cloud: ${result.error}`, 'error');
      }
    } else {
      // SOFT DELETE (Move to Trash)
      // Optimistic update
      setSpiels(prev => prev.map(s => s.id === id ? { ...s, isDeleted: true } : s));
      
      const success = await patchCloud(id, { isDeleted: true });
      
      if (success) {
        showToast('Moved to Trash');
      } else {
        setSpiels(previousSpiels);
        showModal('Action Failed', 'Could not move item to trash', 'error');
      }
    }
    
    setIsDeleting(false);
    setItemToDelete(null);
  };

  // Repair Logic
  const handleRepairDatabase = async () => {
    startLoading('Repairing Database...');
    const url = constructUrl('/spiels.json');
    
    try {
      const data = spiels.reduce((acc, spiel) => {
        acc[spiel.id] = spiel;
        return acc;
      }, {} as Record<string, Spiel>);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);

      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`Status ${response.status}`);
      
      setSyncStatus('cloud');
      setShowAdminModal(false);
      showModal('Repair Successful', 'Database structure has been fixed and synced with your local view.', 'success');
    } catch (error: any) {
      console.error(error);
      showModal('Repair Failed', `Could not repair database: ${error.message}`, 'error');
    } finally {
      stopLoading();
    }
  };

  // Push Defaults
  const handlePushInitialData = async () => {
    startLoading('Resetting to Defaults...');
    const url = constructUrl('/spiels.json');
    
    try {
      const data = SPIELS.reduce((acc, spiel) => {
        acc[spiel.id] = { ...spiel, isDeleted: false };
        return acc;
      }, {} as Record<string, Spiel>);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); 

      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`Status ${response.status}`);
      
      setSpiels(SPIELS);
      setSyncStatus('cloud');
      setShowAdminModal(false);
      
      setTimeout(() => {
        showModal('Reset Successful', 'The database has been restored to the default 25 templates.', 'success');
      }, 300);

    } catch (error: any) {
      console.error(error);
      setShowAdminModal(false);
      setTimeout(() => {
        showModal('Reset Failed', `Could not reset database: ${error.message}`, 'error');
      }, 300);
    } finally {
      stopLoading();
    }
  };

  const handleEditCategory = (cat: string) => {
    const newName = prompt('Enter new category name:', cat);
    if (newName && newName !== cat) {
      setCategories(prev => prev.map(c => c === cat ? newName : c));
      setSpiels(prev => prev.map(s => s.category === cat ? { ...s, category: newName } : s));
      if (selectedCategory === cat) setSelectedCategory(newName);
    }
  };

  const handleDeleteCategory = (cat: string) => {
    if (confirm(`Delete category "${cat}"? Spiels in this category will move to "N/A".`)) {
      setCategories(prev => prev.filter(c => c !== cat));
      setSpiels(prev => prev.map(s => s.category === cat ? { ...s, category: 'N/A' } : s));
      if (selectedCategory === cat) setSelectedCategory('All');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#f0f2f5] dark:bg-[#202124] transition-colors duration-300 overflow-hidden font-sans relative">
      
      {/* Global Loading Overlay */}
      {isGlobalLoading && (
        <div className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm flex items-center justify-center flex-col">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
             <Loader2 className="animate-spin text-blue-500 w-12 h-12 mb-4" />
             <p className="text-lg font-bold text-gray-800 dark:text-white animate-pulse">{loadingMessage}</p>
          </div>
        </div>
      )}

      <Header 
        isAdmin={isAdmin || false}
        activeUsers={activeUsers}
        currentUser={currentUser}
        onLogin={handleGoogleLogin}
        onLogout={handleLogout}
        syncStatus={syncStatus}
        isSyncing={isGlobalLoading}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white dark:bg-[#202124] border-r border-transparent flex-shrink-0 hidden md:flex flex-col z-10 transition-colors duration-300">
          <div className="p-4 pl-6">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Directory</h3>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-4">
             {filteredSpiels.length > 0 ? (
               <Sidebar spiels={filteredSpiels} onSelectSpiel={scrollToSpiel} />
             ) : (
               <div className="p-4 text-center text-gray-400 dark:text-gray-500 text-sm">
                 {showTrash ? "Trash is empty." : "No spiels found."}
               </div>
             )}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          <div className="bg-[#f0f2f5]/90 dark:bg-[#202124]/90 backdrop-blur-md z-20 px-4 sm:px-8 pt-6 pb-4 transition-colors duration-300">
            <div className="max-w-4xl mx-auto w-full">
              <div className="mb-6 flex justify-center">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 overflow-hidden flex items-center gap-2">
                  <CategoryFilter 
                      categories={categories}
                      selected={selectedCategory}
                      onSelect={setSelectedCategory}
                      isAdmin={isAdmin || false}
                      onEditCategory={handleEditCategory}
                      onDeleteCategory={handleDeleteCategory}
                  />
                  {/* Trash Toggle - Visible only to Admins */}
                  {(isAdmin || false) && (
                    <>
                      <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                      <button 
                        onClick={() => { setShowTrash(!showTrash); setSelectedCategory('All'); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                          showTrash 
                            ? 'bg-red-100 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900/50' 
                            : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 dark:bg-[#303134] dark:text-gray-400 dark:border-gray-700'
                        }`}
                        title={showTrash ? "Back to Active" : "View Trash"}
                      >
                        {showTrash ? <ArchiveRestore size={16} /> : <Trash2 size={16} />}
                        <span className="hidden sm:inline">{showTrash ? "Trash View" : "Trash"}</span>
                      </button>
                    </>
                  )}
                </div>
                {(isAdmin || false) && !showTrash && (
                  <button 
                    onClick={() => { setEditingSpiel(undefined); setShowAdminModal(true); }}
                    className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center transform hover:scale-105"
                  >
                    <i className="fa-solid fa-plus text-lg"></i>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-8 scroll-smooth" id="main-scroll-container">
            <div className="max-w-4xl mx-auto w-full pb-24">
              
              {showTrash && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/50 text-center">
                   <p className="text-red-800 dark:text-red-300 text-sm font-bold">
                     <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                     Items in trash can be restored or permanently deleted.
                   </p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 mt-2">
                {filteredSpiels.length > 0 ? (
                  filteredSpiels.map((spiel) => (
                    <SpielCard 
                      key={spiel.id}
                      spiel={spiel}
                      onCopy={showToast}
                      isAdmin={isAdmin || false}
                      isTrashView={showTrash}
                      onEdit={() => { setEditingSpiel(spiel); setShowAdminModal(true); }}
                      onDelete={() => requestDeleteSpiel(spiel.id)}
                      onRestore={() => handleRestoreSpiel(spiel.id)}
                    />
                  ))
                ) : (
                  <div className="text-center py-20 text-gray-400 dark:text-gray-500">
                    <div className="bg-gray-100 dark:bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                       {showTrash ? <Trash2 className="w-10 h-10 opacity-20" /> : <i className="fa-solid fa-magnifying-glass text-4xl opacity-20"></i>}
                    </div>
                    <p className="font-medium text-lg">{showTrash ? "Trash is empty." : "No spiels found."}</p>
                    <button 
                      onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                      className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {showAdminModal && (
        <AdminModal 
          categories={categories}
          onClose={() => setShowAdminModal(false)}
          onSubmit={handleSaveSpiel}
          initialData={editingSpiel}
          onPushInitialData={handlePushInitialData}
          onRepairDatabase={handleRepairDatabase}
        />
      )}

      {/* Custom Confirmation Modal */}
      {itemToDelete && (
        <ConfirmationModal 
          title={showTrash ? "Permanent Delete?" : "Move to Trash?"}
          message={showTrash 
            ? "This action cannot be undone. The spiel will be gone forever." 
            : "This spiel will be moved to the trash bin. You can restore it later."}
          onConfirm={confirmDelete}
          onCancel={() => setItemToDelete(null)}
          isDeleting={isDeleting}
        />
      )}

      {modalConfig.show && (
        <MessageModal 
          title={modalConfig.title} 
          message={modalConfig.message} 
          type={modalConfig.type} 
          onClose={() => setModalConfig({ ...modalConfig, show: false })} 
        />
      )}

      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
};

export default App;
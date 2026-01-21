import React from 'react';
import { UserProfile } from '../types';
import { AvatarGroup } from './AvatarGroup';

interface HeaderProps {
  isAdmin: boolean;
  activeUsers: UserProfile[];
  currentUser: any;
  onLogin: () => void;
  onLogout: () => void;
  syncStatus: 'local' | 'synced' | 'cloud' | 'error';
  isSyncing: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  isAdmin, 
  activeUsers,
  currentUser,
  onLogin, 
  onLogout, 
  syncStatus, 
  isSyncing, 
  isDarkMode, 
  toggleDarkMode
}) => {

  const getSyncBadge = () => {
    if (syncStatus === 'cloud') return (
      <div className="flex items-center gap-1.5 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-cloud text-[10px]"></i>
        <span className="hidden sm:inline">Live</span>
      </div>
    );
    if (syncStatus === 'error') return (
      <div className="flex items-center gap-1.5 text-xs font-medium text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/40 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-circle-exclamation text-[10px]"></i>
        <span className="hidden sm:inline">Error</span>
      </div>
    );
    return (
      <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-database text-[10px]"></i>
        <span className="hidden sm:inline">Local</span>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#202124]/80 backdrop-blur-sm transition-colors duration-300 px-6 h-16 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-md flex items-center justify-center text-white">
           <i className="fa-solid fa-layer-group text-lg"></i>
        </div>
        <div>
          <h1 className="text-xl font-medium text-gray-800 dark:text-gray-100 tracking-tight hidden md:block">Spiel Master</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        
        {/* Collaboration Avatars */}
        {activeUsers.length > 0 && <AvatarGroup users={activeUsers} />}

        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden sm:block"></div>

        {getSyncBadge()}

        <button 
          onClick={toggleDarkMode}
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="Toggle Dark Mode"
        >
          <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
        </button>

        {currentUser ? (
          <div className="flex items-center gap-2 pl-2">
            {isAdmin ? (
              <span className="hidden sm:block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">Admin</span>
            ) : (
              <span className="hidden sm:block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Viewer</span>
            )}
            
            <button 
              onClick={onLogout}
              className="group relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-red-200 dark:hover:border-red-900 transition-all"
              title="Logout"
            >
               {currentUser.photoURL ? (
                 <img src={currentUser.photoURL} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full bg-blue-500 text-white flex items-center justify-center font-bold">
                   {currentUser.displayName?.charAt(0) || 'U'}
                 </div>
               )}
               <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <i className="fa-solid fa-right-from-bracket text-white text-xs"></i>
               </div>
            </button>
          </div>
        ) : (
            <button 
              onClick={onLogin}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-500/30"
            >
              <i className="fa-brands fa-google"></i>
              <span className="hidden sm:inline">Sign in</span>
            </button>
        )}
      </div>
    </header>
  );
};
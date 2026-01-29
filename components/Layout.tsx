
import React from 'react';
import { View } from '../types';
import { Navigation } from './Navigation';
import { HomeView } from './HomeView';
import { ChatView } from './ChatView';
import { TranslatorView } from './TranslatorView';
import { EditorView } from './EditorView';
import { Header } from './Header'; // Now reusing the main Header

interface LayoutProps {
  currentView: View;
  onNavigate: (view: View) => void;
  currentUser: any;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, onNavigate, currentUser }) => {
  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <HomeView onNavigate={onNavigate} />;
      case View.CHAT: return <ChatView user={currentUser} />;
      case View.TRANSLATOR: return <TranslatorView />;
      case View.EDITOR: return <EditorView />;
      default: return <HomeView onNavigate={onNavigate} />;
    }
  };

  // Dummy props for Header to satisfy interface since Layout manages AI views
  // In a real Redux/Context app, these would come from store.
  const headerProps = {
    isAdmin: false,
    activeUsers: [],
    currentUser: currentUser,
    onLogin: () => {},
    onLogout: () => window.location.reload(), // Simple reload to get back to main app logic if needed, or we should pass handlers
    syncStatus: 'synced' as const,
    isSyncing: false,
    isDarkMode: document.documentElement.classList.contains('dark'),
    toggleDarkMode: () => document.documentElement.classList.toggle('dark'),
  };

  return (
    <div className="flex flex-col h-screen bg-[#f0f2f5] dark:bg-[#202124] transition-colors duration-300">
       {/* Reused Header for consistency */}
       <Header {...headerProps} />

       <div className="flex flex-1 overflow-hidden relative">
          {/* Navigation Sidebar */}
          <Navigation currentView={currentView} onNavigate={onNavigate} />

          {/* Main Content Area - Updated background to match App.tsx */}
          <main className="flex-1 overflow-hidden relative bg-[#f0f2f5] dark:bg-[#202124] transition-colors">
             {renderView()}
          </main>
       </div>
    </div>
  );
};

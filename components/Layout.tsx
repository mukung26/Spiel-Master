import React from 'react';
import { View } from '../types';
import { Navigation } from './Navigation';
import { HomeView } from './HomeView';
import { ChatView } from './ChatView';
import { ImageView } from './ImageView';
import { VideoView } from './VideoView';
import { LiveView } from './LiveView';

interface LayoutProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, onNavigate }) => {
  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <HomeView onNavigate={onNavigate} />;
      case View.CHAT: return <ChatView />;
      case View.IMAGE: return <ImageView />;
      case View.VIDEO: return <VideoView />;
      case View.LIVE: return <LiveView />;
      default: return <HomeView onNavigate={onNavigate} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-900 text-slate-200">
      <Navigation currentView={currentView} onNavigate={onNavigate} />
      <main className="flex-1 relative overflow-hidden h-[calc(100vh-80px)] md:h-screen pb-20 md:pb-0">
         {renderView()}
      </main>
    </div>
  );
};
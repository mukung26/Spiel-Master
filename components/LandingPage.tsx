
import React from 'react';
import { ShoppingBag, Lock, Bug, Radio } from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl w-full max-w-md text-center shadow-2xl animate-fade-in relative overflow-hidden">
        
        {/* Version Badge - UPDATED */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded-full border border-white/10">
           <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
           <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">v2.7 Auto</span>
        </div>

        <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg mt-4">
          <ShoppingBag className="text-orange-600" size={40} />
        </div>
        
        <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Spiel Master</h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-white/90 text-sm font-medium leading-relaxed">
            Restricted Access. Please sign in to access response templates and Gemini AI tools.
          </p>
        </div>

        <button 
          onClick={onLoginClick}
          className="w-full bg-white text-orange-600 py-3.5 rounded-xl font-bold text-sm hover:bg-orange-50 transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2"
        >
          <i className="fa-brands fa-google text-lg"></i>
          Sign in / Admin Access
        </button>

        <div className="mt-8 flex flex-col items-center gap-4">
           <div className="flex items-center gap-1.5 text-white/60">
             <Lock size={12} />
             <span className="text-[10px] uppercase tracking-widest font-bold">Secure Workspace</span>
           </div>

           {/* Contact / Bug Report Section */}
           <div className="bg-white/10 rounded-lg p-2.5 flex items-center gap-2 text-[10px] text-white/80 font-medium">
             <Bug size={12} />
             <span>If there's a bug or improvements, kindly contact</span>
             <a 
               href="https://link.seatalk.io/profile/open?seatalk_id=1223036706" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded transition-colors font-bold uppercase tracking-wide"
             >
               Kong
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

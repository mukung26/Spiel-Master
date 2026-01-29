
import React, { useState } from 'react';
import { ShieldCheck, Lock, User, X, Bug } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onGoogleLogin: () => void;
  onAdminLogin: (type: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose, onGoogleLogin, onAdminLogin }) => {
  const [mode, setMode] = useState<'select' | 'admin'>('select');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Korikong3263!') {
      onAdminLogin('Admin');
      onClose();
    } else if (username === 'User' && password === 'Korikong3263!') {
      onAdminLogin('User');
      onClose();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 relative flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
             <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Access your workspace</p>

          {mode === 'select' ? (
            <div className="space-y-3">
              <button 
                onClick={onGoogleLogin}
                className="w-full py-3 px-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl flex items-center justify-center gap-3 transition-all font-medium text-gray-700 dark:text-gray-200"
              >
                <i className="fa-brands fa-google text-red-500 text-lg"></i>
                Sign in with Google
              </button>
              
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-slate-700"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-slate-900 px-2 text-gray-500">Or</span></div>
              </div>

              <button 
                onClick={() => setMode('admin')}
                className="w-full py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Lock size={16} />
                Admin / User Access
              </button>
            </div>
          ) : (
            <form onSubmit={handleAdminSubmit} className="space-y-4 animate-in slide-in-from-right duration-200">
              <div className="text-left">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Username</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div className="text-left">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {error && <p className="text-xs text-red-500 font-bold">{error}</p>}

              <div className="pt-2 flex gap-3">
                <button 
                  type="button"
                  onClick={() => { setMode('select'); setError(''); }}
                  className="flex-1 py-2.5 text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wide transition-all shadow-lg shadow-blue-500/30"
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer with Contact Info */}
        <div className="p-4 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-slate-800">
           <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 font-medium">
             <Bug size={12} />
             <span>Bug or improvement? Contact</span>
             <a 
               href="https://link.seatalk.io/profile/open?seatalk_id=1223036706" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-blue-500 hover:underline font-bold"
             >
               Kong
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

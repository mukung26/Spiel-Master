
import React, { useState } from 'react';
import { ShieldCheck, Lock, User, X, Bug, LogIn } from 'lucide-react';
import { database } from '../firebase';
import { SystemUser } from '../types';

interface LoginModalProps {
  onClose: () => void;
  onGoogleLogin: () => void;
  onAdminLogin: (user: any) => void;
  isLanding?: boolean;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose, onGoogleLogin, onAdminLogin, isLanding = false }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLocalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
        setError("Please enter both username and password.");
        return;
    }
    
    setError('');
    setLoading(true);

    // 1. Hardcoded Super Admin Credentials check (Fallback)
    if (username === 'Admin' && password === 'Korikong3263!') {
      onAdminLogin({
        uid: 'admin_master_local',
        username: 'Admin',
        displayName: 'Master Admin',
        role: 'admin',
        isLocal: true,
        email: 'admin@internal'
      });
      setLoading(false);
      if (!isLanding) onClose();
      return;
    }

    // 2. Database Check for other local accounts
    try {
        const accountsRef = database.ref('accounts');
        const snapshot = await accountsRef.once('value');
        const accounts = snapshot.val();

        let foundUser: SystemUser | null = null;
        let foundKey: string | null = null;

        if (accounts) {
            Object.entries(accounts).forEach(([key, user]: [string, any]) => {
                // Check matching username/email AND matching password
                if ((user.username === username || user.email === username) && user.password === password) {
                    foundUser = user;
                    foundKey = key;
                }
            });
        }

        if (foundUser && foundKey) {
             onAdminLogin({
                 uid: foundKey, // Use the DB key as UID
                 ...foundUser,
                 isLocal: true
             });
             setLoading(false);
             if (!isLanding) onClose();
        } else {
            setError('Invalid credentials');
            setLoading(false);
        }

    } catch (err) {
        console.error("Login Check Error", err);
        setError("Connection error. Please try again.");
        setLoading(false);
    }
  };

  const containerClasses = isLanding 
    ? "min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 flex items-center justify-center p-4"
    : "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200";

  return (
    <div className={containerClasses}>
      <div className={`bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 relative flex flex-col ${isLanding ? 'animate-fade-in' : ''}`}>
        
        {!isLanding && (
            <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-10"
            >
            <X size={20} />
            </button>
        )}

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                <ShieldCheck size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Workspace Access</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Sign in to manage spiels and use AI tools.</p>
          </div>

          <div className="space-y-6">
             {/* Google Login Section */}
             <button 
                onClick={onGoogleLogin}
                className="w-full py-3 px-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl flex items-center justify-center gap-3 transition-all font-bold text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md"
              >
                <i className="fa-brands fa-google text-red-500 text-lg"></i>
                Sign in with Google
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-slate-700"></div></div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest"><span className="bg-white dark:bg-slate-900 px-2 text-gray-400">Or Local Login</span></div>
              </div>

              {/* Local Form Section */}
              <form onSubmit={handleLocalSubmit} className="space-y-3">
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
                    placeholder="Username"
                  />
                </div>
                <div className="relative">
                  <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
                    placeholder="Password"
                  />
                </div>

                {error && <p className="text-xs text-red-500 font-bold text-center">{error}</p>}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                   {loading ? <span className="animate-pulse">Verifying...</span> : <><LogIn size={16} /> Login</>}
                </button>
              </form>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-slate-800 text-center">
           <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 font-medium">
             <Bug size={12} />
             <span>Issues? Contact</span>
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


import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { SystemUser } from '../types';
import { Shield, User, Trash2, Search, Lock, UserPlus, Info } from 'lucide-react';
import { Toast } from './Toast';

interface AdminUserManagementProps {
  currentUserEmail: string;
}

export const AdminUserManagement: React.FC<AdminUserManagementProps> = ({ currentUserEmail }) => {
  const [users, setUsers] = useState<SystemUser[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newUserRole, setNewUserRole] = useState<'admin' | 'user'>('user');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    // Querying 'accounts' node
    const usersRef = database.ref('accounts');
    const handleValue = (snapshot: any) => {
      const data = snapshot.val();
      if (data) {
        // Safe object conversion
        const userList = Object.values(data).map((u: any) => ({
            role: u.role || 'user',
            email: u.email || '',
            username: u.username || '',
            displayName: u.displayName || u.username || u.email || 'Unknown',
            photoURL: u.photoURL || null,
            uid: u.uid || '',
            isLocal: u.isLocal || false,
            password: u.password // optional
        })) as SystemUser[];

        // Sort: Admins first, then by email/username
        setUsers(userList.sort((a, b) => {
          if (a.role === 'admin' && b.role !== 'admin') return -1;
          if (a.role !== 'admin' && b.role === 'admin') return 1;
          const nameA = a.email || a.username || '';
          const nameB = b.email || b.username || '';
          return nameA.localeCompare(nameB);
        }));
      } else {
        setUsers([]);
      }
      setLoading(false);
    };

    usersRef.on('value', handleValue);
    return () => usersRef.off('value', handleValue);
  }, []);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername.trim()) return;

    const username = newUsername.trim();
    const userKey = username.replace(/\./g, ',');

    // Check if exists
    const existing = users.find(u => (u.username === username) || (u.email === username));
    if (existing) {
      if (window.confirm(`User ${username} already exists. Update role to ${newUserRole}?`)) {
          await database.ref(`accounts/${userKey}/role`).set(newUserRole);
          if (newPassword) {
             await database.ref(`accounts/${userKey}/password`).set(newPassword);
          }
          setToast(`Updated user: ${username}`);
          setNewUsername('');
          setNewPassword('');
      }
      return;
    }

    try {
      const isEmail = username.includes('@');
      
      const newUserObj: SystemUser = {
        role: newUserRole,
        addedBy: currentUserEmail,
        addedAt: Date.now(),
        displayName: username.split('@')[0],
        photoURL: null,
        isLocal: !isEmail || !!newPassword
      };

      if (isEmail && !newPassword) {
         newUserObj.email = username;
      } else {
         newUserObj.username = username;
         newUserObj.password = newPassword;
      }

      await database.ref(`accounts/${userKey}`).set(newUserObj);
      
      setToast(`Added ${newUserRole}: ${username}`);
      setNewUsername('');
      setNewPassword('');
    } catch (err) {
      console.error(err);
      setToast('Failed to add user.');
    }
  };

  const handleToggleRole = async (user: SystemUser) => {
      const identifier = user.email || user.username;
      if (!identifier) return;

      if (identifier === 'admin@internal') {
        setToast("Master Admin role cannot be changed.");
        return;
      }

      if (identifier === currentUserEmail) {
        if (!window.confirm("You are about to change your own role. You might lose access to this panel. Continue?")) return;
      }

      const newRole = user.role === 'admin' ? 'user' : 'admin';
      const key = identifier.replace(/\./g, ',');
      
      try {
          await database.ref(`accounts/${key}/role`).set(newRole);
          setToast(`Changed ${identifier} to ${newRole}`);
      } catch (err) {
          console.error(err);
          setToast("Failed to update role");
      }
  };

  const handleDeleteUser = async (user: SystemUser) => {
    const identifier = user.email || user.username;
    if (!identifier) return;

    if (identifier === 'admin@internal') {
        setToast("Cannot delete the Master Admin.");
        return;
    }
    if (identifier === currentUserEmail) {
      setToast("You cannot delete yourself.");
      return;
    }
    if (!window.confirm(`Are you sure you want to remove ${identifier}?`)) return;

    try {
      const key = identifier.replace(/\./g, ',');
      await database.ref(`accounts/${key}`).remove();
      setToast(`Removed user: ${identifier}`);
    } catch (err) {
      console.error(err);
      setToast('Failed to remove user.');
    }
  };

  const filteredUsers = users.filter(u => {
     if (!u) return false;
     const search = searchTerm.toLowerCase();
     const emailMatch = (u.email || '').toLowerCase().includes(search);
     const usernameMatch = (u.username || '').toLowerCase().includes(search);
     const nameMatch = (u.displayName || '').toLowerCase().includes(search);
     
     return emailMatch || usernameMatch || nameMatch;
  });

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto h-full flex flex-col animate-fade-in overflow-y-auto">
      {toast && <Toast message={toast} />}
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
           <Shield className="text-blue-600" size={24} />
           <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Super Admin Console</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Member Accounts</h2>
        <p className="text-gray-500 dark:text-slate-400">Manage access. Create local credentials or pre-approve Google emails.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add User Form */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 sticky top-4">
            <h3 className="text-sm font-black uppercase tracking-wide text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <UserPlus size={16} /> Add Member
            </h3>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase">Username or Email</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="w-full pl-10 p-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors placeholder-gray-400"
                    placeholder="john.doe or john@gmail.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase">
                    Password <span className="text-gray-400 font-normal lowercase">(optional for Google users)</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-10 p-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors placeholder-gray-400"
                    placeholder="Set a password"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase">Initial Role</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setNewUserRole('user')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${newUserRole === 'user' ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300' : 'bg-gray-50 border-gray-200 dark:border-slate-700 text-gray-500 hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400'}`}
                  >
                    <User size={16} /> User
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewUserRole('admin')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${newUserRole === 'admin' ? 'bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-900/30 dark:border-purple-800 dark:text-purple-300' : 'bg-gray-50 border-gray-200 dark:border-slate-700 text-gray-500 hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400'}`}
                  >
                    <Shield size={16} /> Admin
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
              >
                Create / Update User
              </button>
            </form>

             <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-900/50 rounded-xl border border-blue-100 dark:border-slate-700">
               <div className="flex items-start gap-2 mb-2">
                  <Info size={14} className="text-blue-500 mt-0.5" />
                  <p className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">Sync Info</p>
               </div>
               <p className="text-[11px] text-gray-600 dark:text-slate-400 leading-relaxed">
                 <strong>Don't see a user?</strong><br/>
                 Google accounts from Firebase only appear here <em>after</em> they log in to this app for the first time.
               </p>
             </div>
          </div>
        </div>

        {/* User List */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden flex flex-col h-[600px]">
             <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between gap-4">
                <h3 className="text-sm font-black uppercase tracking-wide text-gray-900 dark:text-white flex-shrink-0">
                  Total Accounts ({users.length})
                </h3>
                <div className="relative flex-1 max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input 
                    type="text" 
                    placeholder="Search accounts..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-xs text-gray-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                  />
                </div>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                {loading ? (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">Loading accounts...</div>
                ) : filteredUsers.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                    <User size={32} className="opacity-20" />
                    <p className="text-sm">No accounts found.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredUsers.map((u) => {
                        const identifier = u.email || u.username || 'Unknown';
                        const isMaster = identifier === 'admin@internal';
                        const isAdmin = u.role === 'admin';

                        return (
                            <div key={identifier} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-slate-700 group">
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    {u.photoURL ? (
                                        <img src={u.photoURL} alt={u.displayName || identifier} className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-slate-600" />
                                    ) : (
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm font-bold ${isAdmin ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 'bg-gradient-to-br from-blue-400 to-cyan-500'}`}>
                                        {(u.displayName || identifier).charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    
                                    <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">{u.displayName || identifier}</p>
                                        {isMaster && <span className="text-[9px] bg-yellow-100 text-yellow-800 px-1.5 rounded font-bold">MASTER</span>}
                                        {u.password && (
                                            <div title="Local Password Set">
                                                <Lock size={10} className="text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-400">{identifier}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    {/* Admin Toggle */}
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Admin Access</span>
                                        <button 
                                            onClick={() => handleToggleRole(u)}
                                            className={`
                                                relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out focus:outline-none
                                                ${isAdmin ? 'bg-purple-600' : 'bg-gray-200 dark:bg-slate-600'}
                                            `}
                                            title={isAdmin ? "Revoke Admin" : "Grant Admin"}
                                        >
                                            <span 
                                                className={`
                                                    absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-sm
                                                    ${isAdmin ? 'translate-x-5' : 'translate-x-0'}
                                                `}
                                            />
                                        </button>
                                    </div>

                                    {/* Delete Button */}
                                    <button 
                                        onClick={() => handleDeleteUser(u)}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                        title="Delete Account"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

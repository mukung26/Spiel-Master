
import React from 'react';
import { UserProfile } from '../types';

interface AvatarGroupProps {
  users: UserProfile[];
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, max = 4 }) => {
  const sortedUsers = [...users].sort((a, b) => (a.photoURL ? -1 : 1));
  
  const visibleUsers = sortedUsers.slice(0, max);
  const hiddenUsers = sortedUsers.slice(max);
  const remaining = hiddenUsers.length;

  const getInitials = (name: string | null) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return '#' + '00000'.substring(0, 6 - c.length) + c;
  };

  return (
    <div className="flex items-center -space-x-2 hover:space-x-1 transition-all duration-300">
      {visibleUsers.map((user, index) => (
        <div 
          key={user.uid} 
          className="relative group cursor-pointer transition-transform hover:-translate-y-1"
          style={{ zIndex: visibleUsers.length - index }} 
        >
          <div className={`
            w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white dark:border-[#202124] 
            flex items-center justify-center text-xs font-bold text-white shadow-sm overflow-hidden
            bg-gray-300 dark:bg-gray-700
          `}
          style={{ backgroundColor: user.photoURL ? 'transparent' : stringToColor(user.displayName || 'A') }}
          >
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
            ) : (
              <span>{getInitials(user.displayName)}</span>
            )}
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-[#202124] rounded-full"></span>
          
          {/* Tooltip */}
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity shadow-lg z-50">
            {user.displayName}
          </div>
        </div>
      ))}

      {remaining > 0 && (
        <div className="relative group z-0 hover:z-30 ml-1">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white dark:border-[#202124] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs font-bold shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            +{remaining}
          </div>
          
          {/* Expanded List Dropdown - Google Collaborator Style */}
          <div className="absolute top-full right-0 mt-2 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] transform origin-top-right">
            <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800">
                {remaining} More
            </div>
            <div className="max-h-64 overflow-y-auto custom-scrollbar p-1">
                {hiddenUsers.map(u => (
                    <div key={u.uid} className="px-2 py-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg flex items-center gap-3 transition-colors cursor-pointer">
                        <div 
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 overflow-hidden shadow-sm"
                            style={{ backgroundColor: stringToColor(u.displayName || 'A') }}
                        >
                             {u.photoURL ? <img src={u.photoURL} className="w-full h-full object-cover" alt="" /> : getInitials(u.displayName)}
                        </div>
                        <span className="truncate text-xs font-medium text-gray-700 dark:text-gray-200">{u.displayName || 'Anonymous'}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

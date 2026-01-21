import React from 'react';
import { UserProfile } from '../types';

interface AvatarGroupProps {
  users: UserProfile[];
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, max = 4 }) => {
  // Sort users so those with photos are first (optional aesthetic)
  const sortedUsers = [...users].sort((a, b) => (a.photoURL ? -1 : 1));
  
  const visibleUsers = sortedUsers.slice(0, max);
  const remaining = sortedUsers.length - max;

  const getInitials = (name: string | null) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  // Generate a consistent color based on name
  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return '#' + '00000'.substring(0, 6 - c.length) + c;
  };

  return (
    <div className="flex items-center -space-x-3 hover:space-x-1 transition-all duration-300 mr-4">
      {visibleUsers.map((user) => (
        <div 
          key={user.uid} 
          className="relative group cursor-pointer transition-transform hover:-translate-y-1 z-0 hover:z-10"
          title={user.displayName || 'Anonymous'}
        >
          <div className={`
            w-9 h-9 rounded-full border-2 border-white dark:border-[#202124] 
            flex items-center justify-center text-xs font-bold text-white shadow-sm overflow-hidden
          `}
          style={{ backgroundColor: user.photoURL ? 'transparent' : stringToColor(user.displayName || 'A') }}
          >
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
            ) : (
              <span>{getInitials(user.displayName)}</span>
            )}
          </div>
          {/* Status Dot */}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-[#202124] rounded-full"></span>
          
          {/* Tooltip */}
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
            {user.displayName}
          </div>
        </div>
      ))}

      {remaining > 0 && (
        <div className="relative z-0">
          <div className="w-9 h-9 rounded-full border-2 border-white dark:border-[#202124] bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold shadow-sm">
            +{remaining}
          </div>
        </div>
      )}
      
      {/* History/Time Icon from screenshot */}
      <div className="ml-4 w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 cursor-pointer transition-colors" title="History">
        <i className="fa-solid fa-clock-rotate-left"></i>
      </div>
    </div>
  );
};
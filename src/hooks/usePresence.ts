import { useEffect, useState } from 'react';
import { ref, onValue, onDisconnect, set, serverTimestamp, push } from 'firebase/database';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, database } from '../firebase';
import { UserProfile } from '../types';

export const usePresence = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeUsers, setActiveUsers] = useState<UserProfile[]>([]);

  useEffect(() => {
    // 1. Listen for Auth Changes
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      if (user) {
        // 2. Setup Presence in Realtime DB
        const userStatusDatabaseRef = ref(database, '/status/' + user.uid);
        const connectedRef = ref(database, '.info/connected');

        onValue(connectedRef, (snapshot) => {
          if (snapshot.val() === false) {
            return;
          }

          // When we disconnect (close tab), remove this node
          onDisconnect(userStatusDatabaseRef).remove().then(() => {
            // Set online status
            set(userStatusDatabaseRef, {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              email: user.email,
              status: 'online',
              lastSeen: serverTimestamp()
            });
          });
        });
      }
    });

    // 3. Listen for ALL active users
    const allUsersRef = ref(database, '/status');
    const unsubscribeUsers = onValue(allUsersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList: UserProfile[] = Object.values(data);
        setActiveUsers(usersList);
      } else {
        setActiveUsers([]);
      }
    });

    return () => {
      unsubscribeAuth();
      unsubscribeUsers();
    };
  }, []);

  return { currentUser, activeUsers };
};
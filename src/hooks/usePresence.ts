import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import { auth, database } from '../firebase';
import { UserProfile } from '../types';

export const usePresence = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [activeUsers, setActiveUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Listen for Auth Changes using v8 style
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      
      if (user) {
        // 2. Setup Presence in Realtime DB
        const userStatusDatabaseRef = database.ref('/status/' + user.uid);
        const connectedRef = database.ref('.info/connected');

        connectedRef.on('value', (snapshot) => {
          if (snapshot.val() === false) {
            return;
          }

          // When we disconnect (close tab), remove this node
          userStatusDatabaseRef.onDisconnect().remove().then(() => {
            // Set online status
            userStatusDatabaseRef.set({
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              email: user.email,
              status: 'online',
              lastSeen: firebase.database.ServerValue.TIMESTAMP
            });
          });
        });
      }
    });

    // 3. Listen for ALL active users
    const allUsersRef = database.ref('/status');
    const handleUsersUpdate = (snapshot: firebase.database.DataSnapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList: UserProfile[] = Object.values(data);
        setActiveUsers(usersList);
      } else {
        setActiveUsers([]);
      }
    };
    allUsersRef.on('value', handleUsersUpdate);

    return () => {
      unsubscribeAuth();
      allUsersRef.off('value', handleUsersUpdate);
    };
  }, []);

  return { currentUser, activeUsers, loading };
};
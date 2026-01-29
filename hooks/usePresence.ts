
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
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      
      if (user) {
        const userStatusDatabaseRef = database.ref('/status/' + user.uid);
        const connectedRef = database.ref('.info/connected');

        connectedRef.on('value', (snapshot) => {
          if (snapshot.val() === false) {
            return;
          }

          userStatusDatabaseRef.onDisconnect().remove().then(() => {
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

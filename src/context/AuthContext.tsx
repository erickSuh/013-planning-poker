import React, { useCallback, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { auth } from 'services/firebase';

interface IAuthContext {
  data: firebase.User;
  handler: () => void;
}

export const INITIAL_STATE = {} as firebase.User;

const LOCAL_STORAGE_STORAGE_KEY = '@eks:auth';

export const AuthContext = React.createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<firebase.User | null>(() => {
    const dataStorage = sessionStorage.getItem(LOCAL_STORAGE_STORAGE_KEY) as any;
    const storage = INITIAL_STATE;
    if (dataStorage) {
      return JSON.parse(dataStorage);
    }
    return sessionStorage.setItem(LOCAL_STORAGE_STORAGE_KEY, JSON.stringify(storage));
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setData(firebaseUser);
      sessionStorage.setItem(LOCAL_STORAGE_STORAGE_KEY, JSON.stringify(firebaseUser));
    });

    return unsubscribe;
  }, []);

  const handler = useCallback(
    (state: firebase.User) => {
      sessionStorage.setItem(LOCAL_STORAGE_STORAGE_KEY, JSON.stringify({ ...data, ...state }));
      setData((prev) => ({ ...prev, ...state }));
    },
    [data],
  );

  return <AuthContext.Provider value={{ data, handler } as any}>{children}</AuthContext.Provider>;
};

export const useUser = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Context 'AuthContext' does not exist");
  return context;
};

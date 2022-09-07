import React, { useCallback, useContext, useState } from 'react';

export type UserProps = {
  id: string;
  name: string;
  room?: string;
  vote?: string;
};

export interface IUserContext {
  data?: UserProps;
  handler: (user: UserProps) => void;
}

export const INITIAL_STATE = {
  id: '',
  name: '',
} as UserProps;

const LOCAL_STORAGE_STORAGE_KEY = '@eks:user';

export const UserContext = React.createContext<IUserContext>({} as any);

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [data, setData] = useState<UserProps | undefined>(() => {
    const dataStorage = localStorage.getItem(LOCAL_STORAGE_STORAGE_KEY) as any;
    const storage = INITIAL_STATE;
    if (dataStorage) {
      return JSON.parse(dataStorage);
    }
    return localStorage.setItem(LOCAL_STORAGE_STORAGE_KEY, JSON.stringify(storage));
  });

  const handler = useCallback(
    (state: UserProps) => {
      localStorage.setItem(LOCAL_STORAGE_STORAGE_KEY, JSON.stringify({ ...data, ...state }));
      setData((prev) => ({ ...prev, ...state }));
    },
    [data],
  );

  return <UserContext.Provider value={{ data, handler }}>{children}</UserContext.Provider>;
};

export const useUser = (): IUserContext => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Context 'AuthContext' does not exist");
  return context;
};

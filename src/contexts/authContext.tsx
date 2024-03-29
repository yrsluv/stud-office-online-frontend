import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type Role = 'Admin' | 'Student' | 'Teacher';

export type Auth = {
  id: number;
  email: string;
  role: Role;
  accessToken: string;
};

export type SetAuth = Dispatch<SetStateAction<Auth | null>>;

type AuthContextValue = {
  auth: Auth | null;
  setAuth: SetAuth;
};
type AuthContextProviderProps = { children: ReactNode };

const authContext = createContext({} as AuthContextValue);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [auth, setAuth] = useState<Auth | null>(null);

  return <authContext.Provider value={{ auth, setAuth }}>{children}</authContext.Provider>;
};

export default authContext;

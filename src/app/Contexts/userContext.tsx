"use client";
import { createContext, ReactNode, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({
  user: { Name: "", Age: 0 },
  // eslint-disable-next-line
  setUser: (user: { Name: string; Age: number }) => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({ Name: "", Age: 0 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

"use client";
import { createContext, ReactNode, useState } from "react";

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({
  data: {
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    answer_5: "",
  },
  setData: (data: {
    answer_1: string;
    answer_2: string;
    answer_3: string;
    answer_4: string;
    answer_5: string;
  }) => {},
});

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState({
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    answer_5: "",
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

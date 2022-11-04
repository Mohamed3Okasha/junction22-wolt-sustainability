import { createContext, useContext, ReactNode, useState } from "react";

type AppProviderProps = {
  children: ReactNode;
};

type AppContextsVals = {};

const AppContext = createContext({} as AppContextsVals);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: AppProviderProps) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

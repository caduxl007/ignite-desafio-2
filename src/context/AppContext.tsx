import { createContext, ReactNode, useContext, useState } from "react";

type AppContextData = {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
};

type AppContextProviderProps = {
  children: ReactNode;
}

const AppContext = createContext({} as AppContextData);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <AppContext.Provider value={{ selectedGenreId, handleClickButton }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  return useContext(AppContext);
}
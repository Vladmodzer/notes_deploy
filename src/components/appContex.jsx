import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext =  () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState(null);
  const [isPageButton, setPageButton] = useState(null);
  const [isTextViewNote ,setTextViewNote] = useState('')
  const contextValue = {
    activeColor,
    setActiveColor,
    isPageButton,
    setPageButton,
    isTextViewNote,
    setTextViewNote
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

import React from "react";
//  1 - Criar Contexto
import react, { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - Criar Provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(6);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

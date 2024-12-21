import React, { createContext, useState, useContext } from 'react';

const PowerContext = createContext();

export const PowerProvider = ({ children }) => {
  const [isPoweredOn, setIsPoweredOn] = useState(false);


  return (
    <PowerContext.Provider value={{ isPoweredOn, setIsPoweredOn }}>
      {children}
    </PowerContext.Provider>
  );
};

export const usePower = () => useContext(PowerContext);

import React, {useState, useContext, createContext} from "react";

const VolumeContext = createContext();

export const VolumeProvider = ({children}) => {
  const [volume, setVolume] = useState(0.7);

  return (
    <VolumeContext.Provider value={{volume, setVolume}}>
    {children}
    </VolumeContext.Provider>
    );

}

export const useVolume = () => useContext(VolumeContext);
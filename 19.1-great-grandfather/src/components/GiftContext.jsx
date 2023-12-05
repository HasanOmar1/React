import React, { createContext, useState } from "react";
const GiftsContext = createContext();

export default function GiftProvider({ children }) {
  const [gifts, setGifts] = useState([]);
  const contextValue = {
    gifts,
    setGifts,
  };
  return (
    <GiftsContext.Provider value={contextValue}>
      {children}
    </GiftsContext.Provider>
  );
}

export { GiftsContext };

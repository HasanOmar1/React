import React, { createContext, useState } from "react";
const GiftsContext = createContext();

export default function GiftProvider({ children }) {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftsContext.Provider value={{ gifts, setGifts }}>
      {children}
    </GiftsContext.Provider>
  );
}

export { GiftsContext };

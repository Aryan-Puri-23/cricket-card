import React, { createContext, useState, useEffect, useContext } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [collection, setCollection] = useState([]);
  const [coins, setCoins] = useState(2000);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    const savedCollection = localStorage.getItem("collection");
    if (savedCollection) setCollection(JSON.parse(savedCollection));

    const savedCoins = localStorage.getItem("coins");
    if (savedCoins) setCoins(Number(savedCoins));
  }, []);

  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);

  useEffect(() => {
    localStorage.setItem("coins", coins);
  }, [coins]);


  const addToCollection = (card) => {
    setCollection((prev) => {
      const existing = prev.find((p) => p.id === card.id);

      if (existing) {
        let reward = 0;
        switch (card.rarity) {
          case "bronze":
            reward = 10;
            break;
          case "silver":
            reward = 25;
            break;
          case "gold":
            reward = 100;
            break;
          default:
            reward = 5;
        }

        setCoins((c) => c + reward);

        return prev.map((p) =>
          p.id === card.id ? { ...p, count: (p.count || 1) + 1 } : p
        );
      } else {
        return [...prev, { ...card, count: 1 }];
      }
    });
  };




  const deductCoins = (amount) => {
    setCoins((c) => c - amount);
  };

  return (
    <StoreContext.Provider value={{ collection, addToCollection, coins, deductCoins, mute, setMute }}>
      {children}
    </StoreContext.Provider>
  );
}
export function useStore() {
  return React.useContext(StoreContext);
}

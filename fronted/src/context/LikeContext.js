import React, { useState, createContext } from "react";

import { useAuthContext } from "../hooks/useAuthContext";

export const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [likedItem, setLikedItem] = useState([]);
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  const likeCoin = (coin) => {
    setLikedItem([...likedItem, coin]);
    const handleFav = async () => {
      if (!user) {
        setError("You must be logged in");
        return;
      }

      const favcoin = { coinName: coin.id };

      const response = await fetch("/api/favcoin", {
        method: "POST",
        body: JSON.stringify(favcoin),
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setError(null);
      }
    };
    handleFav();
  };

  const dissLikeCoin = (coin) => {
    setLikedItem(likedItem.filter((w) => w.id !== coin.id));
    const handleClick = async () => {
      if (!user) {
        setError("You must be logged in");
        return;
      }

      const response = await fetch("/api/favcoin/favcoin/" + coin.id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (!response.ok) {
        console.log(json.error);
      }
      if (response.ok) {
        setError(null);
      }
    };
    handleClick();
  };

  return (
    <LikeContext.Provider value={{ likedItem, likeCoin, dissLikeCoin }}>
      {children}
    </LikeContext.Provider>
  );
}

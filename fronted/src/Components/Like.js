import React, { useContext } from "react";
import { LikeContext } from "../context/LikeContext";
import remove from "../img/remove.png";
import add from "../img/add.png";

export default function Like({ coin }) {
  const { likedItem, likeCoin, dissLikeCoin } = useContext(LikeContext);

  const isItLiked = (coinName) => {
    const result = likedItem.some((coin) => coin.id === coinName);
    return result;
  };
  return isItLiked(coin.id) ? (
    <div className="add-remove" onClick={() => dissLikeCoin(coin)}>
      <img
        className="add-remove-icon"
        src={remove}
        alt="Add coin to watchList"
      />
    </div>
  ) : (
    <div className="add-remove" onClick={() => likeCoin(coin)}>
      <img
        className="add-remove-icon"
        src={add}
        alt="Remove coin from watchlist"
      />
    </div>
  );
}

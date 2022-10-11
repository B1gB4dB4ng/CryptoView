import React, { useContext } from "react";
import { LikeContext } from "../context/LikeContext";
import heart1 from "../img/heart1.png";
import heart2 from "../img/heart2.png";

export default function Like({ coin }) {
  const { likedItem, likeCoin, dissLikeCoin } = useContext(LikeContext);

  const isItLiked = (coinName) => {
    const result = likedItem.some((coin) => coin.id === coinName);
    return result;
  };
  return isItLiked(coin.id) ? (
    <div className="heart" onClick={() => dissLikeCoin(coin)}>
      <img className="heart-icon" src={heart1} alt="fav-icon" />
    </div>
  ) : (
    <div className="heart" onClick={() => likeCoin(coin)}>
      <img className="heart-icon" src={heart2} alt="fav-icon" />
    </div>
  );
}

import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";
import Up from "../img/Up.png";
import Down from "../img/Down.png";

export default function CoinCard({ coin }) {
  return (
    <div className="cards">
      <div className="cardsInfoBox">
        <Link to={`/coins/${coin.id}`} coin={coin} className="coinLink">
          <img className="card-img" src={coin.image} alt={coin.symbol} />
        </Link>
        <h3>{coin.name}</h3>
        <h4>Current Price: {coin.current_price} $</h4>

        <div>
          {coin.price_change_percentage_24h > 0 ? (
            <img src={Up} alt="increasing" className="coinStatusImg" />
          ) : (
            <img src={Down} alt="decreasing" className="coinStatusImg" />
          )}
        </div>
      </div>

      <Like coin={coin} />
    </div>
  );
}

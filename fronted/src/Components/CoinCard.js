import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";

export default function CoinCard({ coin }) {
  return (
    <div className="cards">
      <Link to={`/coins/${coin.id}`} coin={coin}>
        <img className="card-img" src={coin.image} alt={coin.symbol} />
        <h3>{coin.name}</h3>
        <h4>{coin.current_price}</h4>
        <h4>{coin.symbol}</h4>
      </Link>
      <Like coin={coin} />
      <div>
        {coin.price_change_percentage_24h > 0 ? <h1>+</h1> : <h1>-</h1>}
      </div>
    </div>
  );
}

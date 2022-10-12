import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";
const HomePageCards = ({ coin }) => {
  return (
    <div className="homePageCards">
      <Link to={`/coins/${coin.id}`} coin={coin} className="coinLink">
        <img className="card-img" src={coin.image} alt={coin.symbol} />
      </Link>
      <h3>{coin.name}</h3>
      <Like coin={coin} />
    </div>
  );
};

export default HomePageCards;

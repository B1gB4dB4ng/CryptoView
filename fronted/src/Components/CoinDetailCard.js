import React from "react";

const CoinDetailCard = ({ coin }) => {
  const { name, image, market_data, symbol, market_cap_rank } = coin;

  return (
    <div className="coin-detail">
      <h2>{name}</h2>
      <img src={image.large} alt={coin.id} className="img-coin-detail" />
      <h4>Current Price : {market_data.current_price.usd}</h4>
      <h4>Symbol :{symbol} </h4>
      <h4>Market Rank : {market_cap_rank} </h4>
      <h4>Lowest Price(24h) : {market_data.low_24h.usd} $</h4>
      <h4>Highest Price(24h) : {market_data.high_24h.usd} $</h4>
      <h4>All time high : {market_data.ath.usd} $</h4>
      <h4>All time Date: {market_data.ath_date.usd.split("T", 1)}</h4>
    </div>
  );
};

export default CoinDetailCard;

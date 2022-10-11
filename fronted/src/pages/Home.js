import React, { useEffect } from "react";
import CoinCard from "../Components/CoinCard.js";
import { useCoinsContext } from "../hooks/useCoinContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const { coins, dispatch } = useCoinsContext();
  const { user } = useAuthContext();

  const coinListURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin%2Cripple%2Ccardano%2Csolana%2Cmatic-network%2Cpolkadot%2Cdogecoin%2Cavalanche-2%2Cftx-token%2Cnear%2Celrond-erd-2%2Cdecentraland%2Cthe-sandbox%2Cmina-protocol%2Ccompound-governance-token%2Ccoti%2Cceek%2Creef%2Ccoin98%2Cmobox%2Ccasper-network%2Cholotoken%2C1inch&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(coinListURL);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_COIN", payload: json });
      }
    };
    if (user) {
      fetchCoins();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      {coins && coins.map((coin) => <CoinCard coin={coin} key={coin.id} />)}
    </div>
  );
}

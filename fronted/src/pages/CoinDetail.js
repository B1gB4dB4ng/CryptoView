import { useParams } from "react-router-dom";
import Calculation from "../Components/Calculation";
import CoinDetailCard from "../Components/CoinDetailCard";

import { useAuthContext } from "../hooks/useAuthContext";
import { useFetch } from "../hooks/useFetch";

const CoinDetail = () => {
  const { user } = useAuthContext();
  const params = useParams();

  const coinURL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  if (user) {
  }
  const { data: coin } = useFetch(coinURL);

  return (
    <div>
      {coin && (
        <div>
          <CoinDetailCard coin={coin} key={coin.symbol} />
          <Calculation coin={coin} price={coin.price} />
        </div>
      )}
    </div>
  );
};

export default CoinDetail;

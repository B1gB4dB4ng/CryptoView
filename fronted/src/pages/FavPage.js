import React, { useEffect, useState, useContext } from "react";
import CoinCard from "../Components/CoinCard";

import { useAuthContext } from "../hooks/useAuthContext";
import { useCoinsContext } from "../hooks/useCoinContext";
import { LikeContext } from "../context/LikeContext";
const FavPage = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState([]);
  const { coins } = useCoinsContext();

  const { likedItem } = useContext(LikeContext);
  useEffect(() => {
    const fetchFav = async () => {
      const response = await fetch("/api/favcoin", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      setData(json);
    };
    fetchFav();
  }, [user, likedItem]);

  const favcoins = coins.filter((item) =>
    data.map((item2) => item2.coinName).includes(item.id)
  );

  return (
    <div>
      <div className="fav-products">
        {favcoins &&
          favcoins.map((favcoin) => <CoinCard coin={favcoin} key={favcoin} />)}
      </div>
    </div>
  );
};

export default FavPage;

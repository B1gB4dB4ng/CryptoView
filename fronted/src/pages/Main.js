import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Components/Loading";
import ImageSlider from "../Components/Slider";
import AppImg from "../img/app-img.svg";

import { useAuthContext } from "../hooks/useAuthContext";
const Main = () => {
  const [newsArray, setNewsArray] = useState([]);
  const { user } = useAuthContext();
  const URL = "https://api.coinstats.app/public/v1/news/latest?skip=0&limit=5";

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setNewsArray(data);
      } catch (err) {
        console.log("ERROR");
      }
    })();
  }, [user]);

  const { news } = newsArray;

  return news ? (
    <div className="news">
      <div className="containerStyles">
        <h2>Jump start your crypto portfolio !</h2>
        {!user ? (
          <Link to="/signup">
            <button class="signup-btn"> Signup </button>
          </Link>
        ) : (
          <></>
        )}
        <ImageSlider slides={news} />
      </div>
      <img src={AppImg} className="appImg" alt="crypto application" />
    </div>
  ) : (
    <Loading />
  );
};

export default Main;

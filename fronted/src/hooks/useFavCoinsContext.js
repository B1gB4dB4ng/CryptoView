import { FavCoinsContext } from "../context/FavCoinsContext";
import { useContext } from "react";

export const useFavCoinsContext = () => {
  const context = useContext(FavCoinsContext);

  if (!context) {
    throw Error(
      "useFavCoinsContext must be used inside an FavCoinsContextProvider"
    );
  }

  return context;
};

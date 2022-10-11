import { CoinsContext } from "../context/CoinsContext";
import { useContext } from "react";

export const useCoinsContext = () => {
  const context = useContext(CoinsContext);

  if (!context) {
    throw Error(
      "useFavCoinsContext must be used inside an FavCoinsContextProvider"
    );
  }

  return context;
};

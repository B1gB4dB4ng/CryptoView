import { CoinsContext } from "../context/CoinsContext";
import { useContext } from "react";

export const useCoinsContext = () => {
  const context = useContext(CoinsContext);

  if (!context) {
    throw Error("useCoinsContext must be used inside an CoinsContextProvider");
  }

  return context;
};

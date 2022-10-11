import { createContext, useReducer } from "react";

export const CoinsContext = createContext();

export const coinsReducer = (state, action) => {
  if (action.type === "SET_COIN") {
    return {
      coins: action.payload,
    };
  } else {
    return state;
  }
};

export const CoinsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coinsReducer, {
    coins: null,
  });

  return (
    <CoinsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CoinsContext.Provider>
  );
};

import { createContext, useReducer } from "react";

export const FavCoinsContext = createContext();

export const favcoinsReducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVCOIN":
      return {
        favcoins: action.payload,
      };
    case "CREATE_FAVCOIN":
      return {
        favcoins: [action.payload, ...state.favcoins],
      };
    case "DELETE_FAVCOIN":
      return {
        favcoins: state.favcoins.filter((w) => w._id !== action.payload._id),
      };
    default:
      return null;
  }
};

export const FavCoinsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favcoinsReducer, {
    favcoins: null,
  });

  return (
    <FavCoinsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FavCoinsContext.Provider>
  );
};

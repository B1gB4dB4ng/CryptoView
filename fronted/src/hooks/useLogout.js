import { useAuthContext } from "./useAuthContext";
import { useFavCoinsContext } from "./useFavCoinsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchFavcoins } = useFavCoinsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });

    dispatchFavcoins({ type: "SET_FAVCOIN", payload: null });
  };

  return { logout };
};

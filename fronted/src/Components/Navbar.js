import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <div className="brand">
          <Link to="/">
            <h1>CryptoView </h1>
          </Link>
        </div>

        <nav>
          {user && (
            <div className="nav-box">
              <div className="links">
                <div className="linkText">
                  <Link to="/home">Coins</Link>
                </div>
                <div className="linkText">
                  <Link to="/watchlist" className="">
                    WatchList
                  </Link>
                </div>
                <div className="linkText">
                  <Link to="/">Crypto News</Link>
                </div>
              </div>
              <div className="user">
                <div className="user-info">
                  <h5>{user.email}</h5>
                </div>

                <button onClick={handleClick}>Log out</button>
              </div>
            </div>
          )}
          {!user && (
            <div className="loginSignup">
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

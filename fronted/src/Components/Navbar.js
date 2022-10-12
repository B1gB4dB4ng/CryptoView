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
        <Link to="/home">
          <h1>CryptoView </h1>
        </Link>
        <nav>
          {user && (
            <div className="nav-box">
              <div className="links">
                <Link to="/watchlist">WatchList</Link>
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

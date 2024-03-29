import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../../utils/useAuth";
import "./NavBar.css";

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <nav className="nav-bar">
            <Link to={"/"} className="nav-text">
                <h1>Amy's Shop</h1>
            </Link>
            <ul className="nav-ul">
                <li>
                    <Link to={"cart"} className="nav-text">
                        <FaCartShopping />
                    </Link>
                </li>
                <li>
                    {isAuthenticated ? (
                        <div className="nav-text" onClick={() => logout()}>
                            Logout
                        </div>
                    ) : (
                        <Link to={"login"} className="nav-text">
                            {" "}
                            Login
                        </Link>
                    )}
                </li>
                <li>
                    <Link to={"register"} className="nav-text">
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to={"/"}>
                <h1>Amy's Shop</h1>
            </Link>
            <ul>
                <li>
                    <Link to={"cart"}>Cart</Link>
                </li>
                <li>
                    <Link to={"login"}>Login</Link>
                </li>
                <li>
                    <Link to={"register"}>Register</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;

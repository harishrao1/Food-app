import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// Reuable component
export const ImgComponent = ({ item, itemname }) => {
  return (
    <a href="/">
      <img className={itemname} alt={itemname} src={item} />
    </a>
  );
};

export const Title = () => {
  return <ImgComponent item={logo} itemname={"logo"} />;
};

export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  return (
    <div className="nav-items">
      <ul>
        <li>
          <button className="nav-btn">
            <Link to="/">Home</Link>
          </button>
        </li>
        <li>
          <button className="nav-btn">
            <Link to="/about">About</Link>
          </button>
        </li>
        <li>
          <button className="nav-btn">
            <Link to="/contact">Contact</Link>
          </button>
        </li>
        <li>
          <button className="nav-btn">Cart</button>
        </li>
        <li>
          <button
            className="nav-btn"
            onClick={() => {
              isLoggedIn === "Login"
                ? setIsLoggedIn("Logout")
                : setIsLoggedIn("Login");
            }}
          >
            {isLoggedIn}
          </button>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      {" "}
      <Title />
      <NavBar />
    </div>
  );
};
export default Header;

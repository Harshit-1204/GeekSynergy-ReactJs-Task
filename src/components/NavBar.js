import React ,{useContext}from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

function NavBar() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const renderLIst = () => {
    if (state) {
      return [
        <li key="1">
          <Link to="/about">About</Link>
        </li>,

        <button
          key="3"
          className="btn "
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "LOGOUT" });
            return history.push("/signup");
          }}
        >
          LogOut
        </button>,
      ];
    } else {
      return [
        <li key="3">
          <Link to="/signin">SignIn</Link>
        </li>,
        <li key="4">
          <Link to="/signup">SignUp</Link>
        </li>,
      ];
    }
  };
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">
            Geeksynergy
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {renderLIst()}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

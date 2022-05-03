import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "final_app/assets/style.css";

export default function Nav() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    window.addEventListener("login", (e) => {
      setLoggedIn(true);
    });

    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [loggedIn]);

  return (
    <nav
      className={location.pathname === "/login" ? "main-nav white" : "main-nav"}
    >
      {loggedIn ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books/">Books</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

import React, { useState } from "react";
import Meals from "./Meals";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/buildameal">Build-A-Meal</Link>
        <Link to="/meals">Meals</Link>
        <Route exact path="/meals" component={Meals}></Route>
      </div>
      <div>
        {user ? (
          <>
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;

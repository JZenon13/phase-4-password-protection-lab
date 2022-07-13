import React, { useState } from "react";
import Meals from "./Meals";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function handleMeals() {
    navigate("/meals");
    fetch("/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }
  console.log(meals);
  function handleBuildAMeal() {
    console.log("asfd");
  }

  function handleFaq() {
    console.log("asdf");
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {user ? (
          <>
            <button onClick={handleFaq}>FAQ</button>
            <button onClick={handleBuildAMeal}>Build-A-Meal</button>
            <button onClick={handleMeals}>Meals</button>
            <button onClick={handleLogoutClick}>Logout</button>

            <Router>
              <Routes>
                <Route path="/meals" element={<Meals />} />
              </Routes>
            </Router>
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

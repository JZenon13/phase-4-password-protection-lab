import React, { useState, useEffect } from "react";

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  return <div>Meals</div>;
}

export default Meals;

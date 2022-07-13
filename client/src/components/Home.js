import React from "react";
import LandingPage from "./LandingPage";

function Home({ user }) {
  if (user) {
    return <>Welcome </>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;

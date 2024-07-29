import React from "react";
import Banner from "./Banner";
import Properties from "./Properties";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Properties />
    </div>
  );
};

export default Home;

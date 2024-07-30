import React from "react";
import Banner from "./Banner";
import Properties from "./Properties";
import { Helmet } from "react-helmet-async";
import Features from "../../components/Features/Features";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Properties />
      <Features />
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import Banner from "./Banner";
import Properties from "./Properties";
import { Helmet } from "react-helmet-async";
import Features from "../../components/Features/Features";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Properties data-aos="fade-right" />
      <Features data-aos="fade-left" />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;

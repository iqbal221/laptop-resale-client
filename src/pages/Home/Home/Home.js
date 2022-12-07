import React from "react";

import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import DiscountOffer from "../DiscountOffer/DiscountOffer";

const Home = () => {
  return (
    <div className="lg:px-24 mx-3">
      <Banner></Banner>
      <Categories></Categories>
      <Advertisement></Advertisement>
      <DiscountOffer></DiscountOffer>
    </div>
  );
};

export default Home;

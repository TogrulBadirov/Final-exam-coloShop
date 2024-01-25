import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import "./index.scss";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import NewArrivals from "../../components/NewArrivals";
import BestSellers from "../../components/BestSellers";
import LatestBlogs from "../../components/LatestBlogs";
const Home = () => {
  return (
    <>
      <Toaster classname="toast"/>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Categories />
      <NewArrivals />
      <BestSellers/>
      <LatestBlogs/>
    </>
  );
};

export default Home;

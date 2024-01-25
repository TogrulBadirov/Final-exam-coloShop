import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import NewArrivals from "../../components/NewArrivals";
const Home = () => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Helmet>
        <title>Home</title>
      </Helmet>
        <Header/>
        <Categories/>
        <NewArrivals/>
    </>
  );
};

export default Home;

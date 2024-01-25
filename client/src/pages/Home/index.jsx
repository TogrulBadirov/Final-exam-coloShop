import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
const Home = () => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Helmet>
        <title>Home</title>
      </Helmet>
        
    </>
  );
};

export default Home;

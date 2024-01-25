import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
const Wishlist = () => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section id="Wishlist">
        <div className="container">

        </div>
      </section>
    </>
  );
};

export default Wishlist;

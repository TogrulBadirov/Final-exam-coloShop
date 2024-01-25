import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
const Basket = () => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <section id="Basket">
        <div className="container">

        </div>
      </section>
    </>
  );
};

export default Basket;

import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
const Detail = () => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <section id="Detail">
        <div className="container">

        </div>
      </section>
    </>
  );
};

export default Detail;

import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
const AddPage = () => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Helmet>
        <title>AddPage</title>
      </Helmet>
      <section id="AddPage">
        <div className="container">

        </div>
      </section>
    </>
  );
};

export default AddPage;

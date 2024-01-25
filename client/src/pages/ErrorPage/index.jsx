import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
const ErrorPage = () => {
  return (
    <>
      <Toaster  />
      <Helmet>
        <title>ErrorPage</title>
      </Helmet>
      <section id="ErrorPage">
        <div className="container">

        </div>
      </section>
    </>
  );
};

export default ErrorPage;

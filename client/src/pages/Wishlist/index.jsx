import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss";

import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./index.scss";
const Wishlist = () => {
  const {
    basket,
    addToBasket,
    isInBasket,
    removeFromBasket,
    updateCount,
    total,
  } = useContext(BasketContext);
  const { wishlist, addToWishlist, isInWishlist } = useContext(WishlistContext);
  return (
    <>
      <Toaster  />
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section id="Wishlist">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Wishlist</h2>
          <div className="red-bar"></div>
        </div>
        <div className="products">
          <div className="row">
            {wishlist.length < 1 && <h1>Wishlist Is Empty!</h1>}
            {wishlist &&
              wishlist.map((item) => (
                <div
                  key={item._id}
                  className="col-lg-2 col-md-4 col-12 product"
                >
                  
                    <div className="image">
                      <img src={item.image} alt="" />
                      {item.discount > 0 && (
                        <div className="discount">-{item.discount}%</div>
                      )}
                      <div className="favorite">
                        <button onClick={()=>addToWishlist(item)} className="fav-btn">
                        {isInWishlist(item) ? <GoHeartFill />  : <GoHeart />}
                        </button>
                        
                      </div>
                    </div>
                    <Link to={`/Detail/${item._id}`}>
                    <div className="content">
                      <h3 className="product-title">{item.title}</h3>
                      <p className="new-price">
                        $
                        {item.discount
                          ? item.price * ((100 - item.discount) / 100)
                          : item.price}{" "}
                        <span className="old-price">
                          {item.discount > 0 && `$${item.price}`}
                        </span>
                      </p>
                    </div>
                  </Link>
                  <div className="add-to-basket">
                    <button onClick={()=>addToBasket(item)} className="add-to-cart-btn">Add To Basket</button>
                  </div>
                  
                </div>
              ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Wishlist;

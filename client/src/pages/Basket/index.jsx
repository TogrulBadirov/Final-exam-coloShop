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
const Basket = () => {
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
      <Toaster />
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <section id="Basket">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Basket</h2>
          <div className="red-bar"></div>
        </div>
        <div className="products">
          <div className="row">
            {basket.length < 1 && <h1>Basket Is Empty!</h1>}
            {basket &&
              basket.map((item) => (
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
                  <p className="count-basket">Count:
                        <button className="count-btn" onClick={()=>updateCount(item,-1)}>-</button>

                         {item.count}
                         <button className="count-btn"  onClick={()=>updateCount(item,1)}>+</button>
                         </p>
                         <p className="total">Product Total: ${item.price * item.count}</p>
                  <div className="add-to-basket">
                    <button onClick={()=>removeFromBasket(item)} className="add-to-cart-btn">Remove From Basket</button>
                  </div>
                </div>
              ))}
             
          </div>
        {total > 0 && <h2>Total: ${total}</h2>}
        </div>
      </div>
    </section>
    </>
  );
};

export default Basket;

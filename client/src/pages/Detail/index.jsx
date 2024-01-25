import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import "./index.scss"
import axios from "axios";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
const Detail = () => {
  const [product, setProduct] = useState(null)
  const {id} = useParams()
  const getproduct = async ()=>{
    const resp = await axios(`http://localhost:3000/${id}`)
    setProduct(resp.data)
  }
  useEffect(() => {
    getproduct()
  
  }, [])
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
        <title>Detail</title>
      </Helmet>
      <section id="Detail">
        <div className="container">
          <div className="row">
            <div className="image col-lg-6">
              <img src={product && product.image} alt="" />
            </div>
            <div className="image col-lg-6">
              <h2>{product && product.title}</h2>
              <p>Info: {product && product.info}</p>
              <p>Price: ${product && product.price}</p>
              <div className="add-to-basket">
                    <button
                      onClick={() => addToBasket(product)}
                      className="add-to-cart-btn"
                    >
                      ADD TO CART
                    </button>
                  </div>
              <div className="add-to-basket">
                    <button
                      onClick={() => addToWishlist(product)}
                      className="add-to-cart-btn"
                    >
                      ADD To Wishlist
                    </button>
                  </div>
                  
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;

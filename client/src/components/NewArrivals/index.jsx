import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import axios from "axios";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
const NewArrivals = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const getAllProducts = async () => {
    const resp = await axios("http://localhost:3000/");
    setProducts(resp.data);
    setLoading(false);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
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
    <section id="NewArrivals">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">New Arrivals</h2>
          <div className="red-bar"></div>
        </div>
        <div className="filter-buttons">
          <button className="filter-btn active">ALL</button>
          <button className="filter-btn">WOMEN'S</button>
          <button className="filter-btn">ACCESSORIES</button>
          <button className="filter-btn">MEN'S</button>
        </div>
        <div className="products">
          <div className="row">
            {products &&
              products.map((item) => (
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
                        <button
                          onClick={() => addToWishlist(item)}
                          className="fav-btn"
                        >
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
                    <button
                      onClick={() => addToBasket(item)}
                      className="add-to-cart-btn"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
const NewArrivals = () => {
  return (
    <section id='NewArrivals'>
        <div className="container">
            <div className="section-header">
                <h2 className='heading'>New Arrivals</h2>
                <div className="red-bar"></div>
            </div>
            <div className="filter-buttons">
                <button className='filter-btn active'>ALL</button>
                <button className='filter-btn'>WOMEN'S</button>
                <button className='filter-btn'>ACCESSORIES</button>
                <button className='filter-btn'>MEN'S</button>
            </div>
            <div className="products">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-12 product">
                    <Link to={"/Detail/:id"}>
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
                        <div className="discount">
                            -20%
                        </div>
                        <div className="favorite">
                            <button className='fav-btn'><GoHeart /></button>
                            {/* <button><GoHeartFill /></button> */}
                        </div>
                    </div>
                    <div className="content">
                        <h3 className='product-title'>Fujifilm X100T 16 MP Digital Camera (Silver)</h3>
                        <p className='new-price'>$520 <span className='old-price'>$590</span></p>
                    </div>
                    </Link>
                    <div className="add-to-basket">
                        <button className='add-to-cart-btn'>ADD TO CART</button>
                    </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-12 product">
                    <Link>
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
                        <div className="discount">
                            -20%
                        </div>
                    </div>
                    <div className="content">
                        <h3 className='product-title'>Fujifilm X100T 16 MP Digital Camera (Silver)</h3>
                        <p className='new-price'>$520 <span className='old-price'>$590</span></p>
                    </div>
                    </Link>
                    <div className="add-to-basket">
                        <button className='add-to-cart-btn'>ADD TO CART</button>
                    </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-12 product">
                    <Link>
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
                        <div className="discount">
                            -20%
                        </div>
                    </div>
                    <div className="content">
                        <h3 className='product-title'>Fujifilm X100T 16 MP Digital Camera (Silver)</h3>
                        <p className='new-price'>$520 <span className='old-price'>$590</span></p>
                    </div>
                    </Link>
                    <div className="add-to-basket">
                        <button className='add-to-cart-btn'>ADD TO CART</button>
                    </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-12 product">
                    <Link>
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
                        <div className="discount">
                            -20%
                        </div>
                    </div>
                    <div className="content">
                        <h3 className='product-title'>Fujifilm X100T 16 MP Digital Camera (Silver)</h3>
                        <p className='new-price'>$520 <span className='old-price'>$590</span></p>
                    </div>
                    </Link>
                    <div className="add-to-basket">
                        <button className='add-to-cart-btn'>ADD TO CART</button>
                    </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-12 product">
                    <Link>
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
                        <div className="discount">
                            -20%
                        </div>
                    </div>
                    <div className="content">
                        <h3 className='product-title'>Fujifilm X100T 16 MP Digital Camera (Silver)</h3>
                        <p className='new-price'>$520 <span className='old-price'>$590</span></p>
                    </div>
                    </Link>
                    <div className="add-to-basket">
                        <button className='add-to-cart-btn'>ADD TO CART</button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewArrivals
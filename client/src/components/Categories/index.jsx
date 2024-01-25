import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <section id='Categories'>
        <div className="container">
            <div className="row">
                <div className="category col-lg-4 col-md-6 col-12">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
                    <Link><span className='category-name'>Women's</span></Link>
                </div>
                </div>
                <div className="category col-lg-4 col-md-6 col-12">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
                    <Link><span className='category-name'>ACCESSORIES'S</span></Link>
                </div>
                </div>
                <div className="category col-lg-4 col-md-6 col-12">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
                    <Link><span className='category-name'>MEN'S</span></Link>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories
import React from 'react'
import "./index.scss"
const Categories = () => {
  return (
    <section id='Categories'>
        <div className="container">
            <div className="row">
                <div className="category col-lg-4 col-md-6 col-12">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
                    <span className='category-name'>Women's</span>
                </div>
                </div>
                <div className="category col-lg-4 col-md-6 col-12">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
                    <span className='category-name'>Women's</span>
                </div>
                </div>
                <div className="category col-lg-4 col-md-6 col-12">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
                    <span className='category-name'>Women's</span>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories
import React from 'react'
import "./index.scss"
const LatestBlogs = () => {
  return (
    <section id='LatestBlogs'>
        <div className="container">
            <h2>Latest Blogs</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default LatestBlogs
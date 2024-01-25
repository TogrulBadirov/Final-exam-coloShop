import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  return (
    <nav>
      <div id="desktop-nav">
        <div className="container">
          <div className="logo">
            <NavLink to={"/"} className={"link"}>
              COLO<span className="shop">SHOP</span>
            </NavLink>
          </div>
          <div className="pages">
            <ul className="page-lists">
              <li className="list">
                <NavLink to={"/"} className={"link"}>
                  Home
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/Basket"} className={"link"}>
                  Basket
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/Wishlist"} className={"link"}>
                  Wishlist
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/AddPage"} className={"link"}>
                  AddPage
                </NavLink>
              </li>
            </ul>
            <div className="icons">
              <button className="icon-btn">
                <Link className="link">
                  <IoSearch />
                </Link>
              </button>
              <button className="icon-btn">
                <Link className="link">
                  <FaUser />
                </Link>{" "}
              </button>
              <button className="icon-btn basket-icon">
                <Link className="link" to={"/Basket"}>
                  <MdShoppingCart />
                </Link>
                <span className="count">1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-nav">
        <div className="container">
          <div className="logo">
            <NavLink to={"/"} className={"link"}>
              COLO<span className="shop">SHOP</span>
            </NavLink>
            
            <div className="icons">
              <button className="icon-btn">
                <Link className="link">
                  <IoSearch />
                </Link>
              </button>
              <button className="icon-btn">
                <Link className="link">
                  <FaUser />
                </Link>{" "}
              </button>
              <button className="icon-btn basket-icon">
                <Link className="link" to={"/Basket"}>
                  <MdShoppingCart />
                </Link>
                <span className="count">1</span>
              </button>
            <button onClick={()=>setIsSideNavOpen(!isSideNavOpen)} className="nav-btn">
              <GiHamburgerMenu className="burger-icon" />
            </button>
            </div>
          </div>
      
        </div>
        <div id={"side-nav"} className={` ${isSideNavOpen ? "active" : ""}`}>
            <div className="icon-container">
            <button className="close-btn" onClick={()=>setIsSideNavOpen(!isSideNavOpen)}>

<IoCloseSharp />
  </button>
            </div>
            <div className="pages">
            <ul className="page-lists">
              <li className="list">
                <NavLink to={"/"} className={"link"}>
                  Home
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/Basket"} className={"link"}>
                  Basket
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/Wishlist"} className={"link"}>
                  Wishlist
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/AddPage"} className={"link"}>
                  AddPage
                </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

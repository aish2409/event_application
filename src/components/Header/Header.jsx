import React, { useState } from "react";
import "./Header.css";
import { FaHeart, FaUser, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
  // const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
	        <div className="container">
	        	<div className="logo"> 
		            <span className="logo-mark"><FaHeart /></span>
		            <span className="logo-title">INVITE </span>
		            <span className="logo-second-title"> DEKHO</span>
		            <span className="logo-tagline">Created with Love </span>
		        </div>
		        <nav >
		        	<Link to="/">Home</Link>
						  <Link to="/about">About </Link>
						 {/* <Link to="/about">About </Link>
						  <Link to="/blog">Blog</Link>*/}
		        </nav>
		      </div>
    </header>

  );
}

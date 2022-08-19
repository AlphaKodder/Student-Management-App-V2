import "./HeaderStyles.css"

import React , {useState} from "react";

import { Link } from "react-router-dom";
import PageLogo from "../res/page-logo.png"

const Header = ()=>{

    return(
        <header>
            <img src={PageLogo} className="page-logo" />
            <ul className="navigator-list">
                <li><Link to="/" className="navigator-list-item">Home</Link></li>
                <li><Link to="/students" className="navigator-list-item">Students</Link></li>
                <li><Link to="/groups" className="navigator-list-item">Groups</Link></li>
                <li><Link to="/" className="navigator-list-item">Courses</Link></li>
                <li><Link to="/" className="navigator-list-item">Teachers</Link></li>
            </ul>
           <div className="nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            <div className="menu-items">
                <div className="menu-items-list">
                    <li><Link to="/" className="navigator-list-item side-menu-item">Home</Link></li>
                    <li><Link to="/students" className="navigator-list-item side-menu-item">Students</Link></li>
                    <li><Link to="/groups" className="navigator-list-item side-menu-item">Groups</Link></li>
                    <li><Link to="/" className="navigator-list-item side-menu-item">Courses</Link></li>
                    <li><Link to="/" className="navigator-list-item side-menu-item">Teachers</Link></li>
                </div>
            </div>
           </div> 
        </header>
    )
};

export default Header
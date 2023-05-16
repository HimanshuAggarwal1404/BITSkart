import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.jpg";
function Header() {
  const [menuopen, UpdateMenu] = useState(0);
    console.log(menuopen);
    const menu = document.getElementById("menu");
    if(menu){
    menu.addEventListener(
      "click",
      () => UpdateMenu(menuopen === 0 ? 1 : 0),
      console.log(menuopen)
    )
    }


  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt=""></img>
        <a href="./public/index.html">BITSkart</a>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#electronics"> Electronics </a>
          </li>
          <li>
            <a href="#clothing">Clothing</a>
          </li>
          <li>
            <a href="#mobiles">Mobiles</a>
          </li>
          <li>
            <a href="#electronics">Books</a>
          </li>
          <li>
            <a href="#electronics">Grocery</a>
          </li>
          <li>
            <a href="#electronics">Kitchen & Dining</a>
          </li>
          <li>
            <a href="#electronics">Sports & Fitness</a>
          </li>
        </ul>
      </div>
      <div className="menu" id="menu">
        <div className="circle">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
      <div className="navbar1" style={{ transform: `scale(${menuopen})` }}>
        <ul>
          <li>
            <a href="#electronics"> Electronics </a>
          </li>
          <li>
            <a href="#clothing">Clothing</a>
          </li>
          <li>
            <a href="#electronics">Mobiles</a>
          </li>
          <li>
            <a href="#electronics">Books</a>
          </li>
          <li>
            <a href="#electronics">Grocery</a>
          </li>
          <li>
            <a href="#electronics">Kitchen & Dining</a>
          </li>
          <li>
            <a href="#electronics">Sports & Fitness</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;

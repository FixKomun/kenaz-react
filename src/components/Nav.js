import React from "react";
import searchIcon from "../images/search 1.svg";
const Nav = () => {
  return (
    <div className="header-container">
      <header className="main-header">
        <div className="box">
          <a href="#" className="logo">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.38627 10.8327C4.38627 10.8327 8.81369 7.13973 11.5441 5.42656C14.2726 3.71166 15.3044 2.18915 14.4679 0.801808C13.6315 -0.58556 11.4335 -0.2582 9.81597 2.46102C8.20106 5.18183 5.36095 7.0317 3.38311 8.7179C1.40617 10.4041 0.013346 11.437 0.013346 11.437C0.013346 11.437 3.80143 14.1308 6.00117 16.4163C8.20106 18.7017 9.20424 19.272 10.2617 19.7076C11.3194 20.143 13.9114 20.3338 14.6338 18.3742C15.3596 16.4163 14.9397 15.7951 13.9357 15.4693C12.9334 15.1419 11.7375 16.6069 11.7375 16.6069C11.7375 16.6069 9.98355 14.8111 8.17347 13.3427C6.36322 11.8743 4.38627 10.8327 4.38627 10.8327Z"
                fill="white"
              />
            </svg>
            <h2>Kenaz</h2>
          </a>
          <nav className="sub-nav">
            <ul>
              <li>
                <a href="#">Media</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">
                  <img src={searchIcon} alt="search" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="sub-header">
        <div className="box">
          <a className="category" href="#">
            <h2 className="one click clicked">NEWS</h2>
            <h2 className="two click ">BUSINESS</h2>
            <h2 className="three click ">SPORT</h2>
            <h2 className="four click ">LIFE</h2>
            <h2 className="five click ">TECH</h2>
            <h2 className="six click ">TRAVEL</h2>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Nav;

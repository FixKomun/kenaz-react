import React from "react";
import MainContectHome from "./MainContentHome";
//import images
import commentIcon from "../images/comment ico.svg";
import asideImage from "../images/Layer 5.png";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import video from "../images/Layer 27.png";
import playButton from "../images/Polygon 1.svg";
import facebookApi from "../images/Layer 34.png";
import banner from "../images/1.png";

const Aside = () => {
  return (
    <div className="aside-container">
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#">
            <u>Popular</u>
          </a>
          <a href="#">
            <u>Top Rated</u>
          </a>
          <a href="#">
            <u>Comments</u>
          </a>
        </li>
      </ul>
      <div className="aside">
        <div className="row">
          <div className="col-lg-8">
            <div className="comment">
              <img src={commentIcon} className="float-right" alt="comment" />
              <p className="text-muted">5</p>
            </div>
            <p className="date text-muted">August 26, 2013</p>
            <p className="text-white">
              <a href="single.html">
                Palestinians call off peace talks after clash
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img className="guy" src={asideImage} alt="someguy" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="comment">
              <img src={commentIcon} className="float-right" alt="comment" />
              <p className="text-muted">5</p>
            </div>
            <p className="date text-muted">August 26, 2013</p>
            <p className="text-white">
              <a href="single.html">
                Palestinians call off peace talks after clash
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img className="guy" src={asideImage} alt="someguy" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="comment">
              <img src={commentIcon} className="float-right" alt="comment" />
              <p className="text-muted">5</p>
            </div>
            <p className="date text-muted">August 26, 2013</p>
            <p className="text-white">
              <a href="single.html">
                Palestinians call off peace talks after clash
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img className="guy" src={asideImage} alt="someguy" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="comment">
              <img src={commentIcon} className="float-right" alt="comment" />
              <p className="text-muted">5</p>
            </div>
            <p className="date text-muted">August 26, 2013</p>
            <p className="text-white">
              <a href="single.html">
                Palestinians call off peace talks after clash
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img className="guy" src={asideImage} alt="someguy" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="comment">
              <img src={commentIcon} className="float-right" alt="comment" />
              <p className="text-muted">5</p>
            </div>
            <p className="date text-muted">August 26, 2013</p>
            <p className="text-white">
              <a href="single.html">
                Palestinians call off peace talks after clash
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img className="guy" src={asideImage} alt="someguy" />
          </div>
        </div>
      </div>
      <div className="social">
        <h2>Social</h2>
        <div className="facebook">
          <img src={facebook} alt="facebook" />
          <p className="like">
            <a href="#">Like</a>
          </p>
          <p className="fans">25041 Fans</p>
        </div>
        <div className="twitter">
          <img src={twitter} alt="twitter" />
          <p className="like">
            <a href="#"> Follow</a>
          </p>
          <p className="fans">25041 Followers</p>
        </div>
        <div className="youtube">
          <img src={youtube} alt="youtube" />
          <p className="like">
            <a href="#"> Subscribe </a>
          </p>
          <p className="fans">25041 Subscribers</p>
        </div>
      </div>
      <div className="kenaz-tv">
        <h2>Kenaz TV</h2>
        <img className="video" src={video} alt="video" />
        <img className="play-button" src={playButton} alt="playButton" />
        <div className="description">
          <p className="text-muted">August 26, 2013</p>
          <p>
            <strong>
              <a href="single.html">
                NASA releases portrait of a planet waving at Saturn
              </a>
            </strong>
          </p>
        </div>
      </div>

      <div className="banners">
        <img src={banner} alt="banner" />
        <img src={banner} alt="banner" />
      </div>
      <div className="facebook-api">
        <img src={facebookApi} alt="facebookApi" />
      </div>
    </div>
  );
};

export default Aside;

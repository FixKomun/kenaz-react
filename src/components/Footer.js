import React from "react";
//importing images
import logo from "../images/logofooter.svg";
import rss from "../images/Rss.svg";
import facebook from "../images/Facebook_f.svg";
import twitter from "../images/Twitter_f.svg";
import dribble from "../images/dribble.svg";
import linkedin from "../images/Linkedin.svg";
import youtube from "../images/Youtube_f.svg";
import skype from "../images/Skype.svg";
import girl from "../images/Layer 63.png";
import twitterBird from "../images/twitter copy.svg";
//import Button from "bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h2 className="d-inline">Kenaz</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              leo ante.
            </p>
            <div className="logos">
              <img src={rss} alt="rss" />
              <img src={facebook} alt="face" />
              <img src={twitter} alt="twitter" />
              <img src={dribble} alt="dribble" />
              <img src={linkedin} alt="linkedin" />
              <img src={youtube} alt="youtube" />
              <img src={skype} alt="skype" />
            </div>
          </div>
          <div className="newsletter col-lg-4">
            <h2>Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              leo ante.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Your mail" />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>Tags Widget</h2>
            <div className="buttons-container">
              <button className="btn btn-link">assueverit</button>
              <button className="btn btn-link">utroquoe</button>
              <button className="btn btn-link">probo</button>
              <button className="btn btn-link">assuev</button>
              <button className="btn btn-link">probo</button>
              <button className="btn btn-link">assueverit</button>
              <button className="btn btn-link">titl</button>
              <button className="btn btn-link">assueverit</button>
              <button className="btn btn-link">assueverit</button>
              <button className="btn btn-link">utroquoe</button>
              <button className="btn btn-link">probo</button>
              <button className="btn btn-link">assueverit</button>
              <button className="btn btn-link">utroquoe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="featured">
              <h2>Featured</h2>
              <div className="row">
                <div className="col-lg-8">
                  <p className="date text-muted">August 26, 2013</p>
                  <p className="description">
                    <strong>
                      <a href="single.html">
                        Palestinians call off peace talks after clash
                      </a>
                    </strong>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={girl} alt="girl" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <p className="date text-muted">August 26, 2013</p>
                  <p className="description">
                    <strong>
                      <a href="single.html">
                        Palestinians call off peace talks after clash
                      </a>
                    </strong>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={girl} alt="girl" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <p className="date text-muted">August 26, 2013</p>
                  <p className="description">
                    <strong>
                      <a href="single.html">
                        Palestinians call off peace talks after clash
                      </a>
                    </strong>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={girl} alt="girl" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="random-posts">
              <h2>Random Posts</h2>
              <div className="row">
                <div className="col-lg-8">
                  <p className="date text-muted">August 26, 2013</p>
                  <p className="description">
                    <strong>
                      <a href="single.html">
                        Palestinians call off peace talks after clash
                      </a>
                    </strong>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={girl} alt="girl" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <p className="date text-muted">August 26, 2013</p>
                  <p className="description">
                    <strong>
                      <a href="single.html">
                        Palestinians call off peace talks after clash
                      </a>
                    </strong>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={girl} alt="girl" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <p className="date text-muted">August 26, 2013</p>
                  <p className="description">
                    <strong>
                      <a href="single.html">
                        Palestinians call off peace talks after clash
                      </a>
                    </strong>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={girl} alt="girl" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="twitter-wall">
              <h2>Twitter Feed</h2>
              <div className="row">
                <img src={twitterBird} alt="twitter-bird" />
                <p className="name">Envato @envato</p>
                <p className="twitt">
                  Is this your typical million dollar day in the park?{" "}
                  <a href="#">http://enva.to/150vxFC</a> Happy @TrueThemes Day!
                  #ThemeForest <a href="#"> pic.twitter.com/EHz7awxOXy</a>
                </p>
              </div>
              <div className="row">
                <img src={twitterBird} alt="twitter-bird" />
                <p className="name">Envato @envato</p>
                <p className="twitt">
                  Happy TrueThemes Day <a href="#">http://enva.to/1dRzgLD </a>
                </p>
              </div>
              <div className="row">
                <img src={twitterBird} alt="twitter-bird" />
                <p className="name">Envato @envato</p>
                <p className="twitt">
                  @robscri I would really want to look into what's taking so
                  long. Thank you ever so much! ^TC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <hr />
      </>
      <div className="footer-info">
        <div className="container">
          <p>
            &copy; 2013 - Kenaz Template - Proudly made at Plava tvornica
            Croatia
          </p>
          <p>Typography - Templates - Contact Form - 404 Page</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

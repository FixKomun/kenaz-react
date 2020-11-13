import React from "react";
//import images
import NewsImage from "../images/Layer 59.png";
import businessImage from "../images/Layer 56.png";
import leftArrow from "../images/Shape 1.svg";
import rightArrow from "../images/Shape 2.svg";
import carouselImage_1 from "../images/slide-3.jpg";
import carouselImage_2 from "../images/slide-4.jpg";
import carouselImage_3 from "../images/slide-5.jpg";
import carouselLeftArrow from "../images/arrow-l.svg";
import carouselRightArrow from "../images/arrow-r.svg";
//import bootstrap components
import Carousel from "react-bootstrap/Carousel";

const MainContentHome = () => {
  return (
    <div className="main-container">
      <div className="news">
        <div className="lead">
          <h2>News</h2>
          <p>
            <a href="single.html">
              <u>See all</u>
            </a>
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={NewsImage} alt="smth" />
            <p className="date">
              <p className="text-left text-muted">August 26, 2013</p>
              <p className="text-right text-muted" id="number">
                14
              </p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
          <div className="col-lg-4">
            <img src={NewsImage} alt="smth" />
            <p className="date">
              <p className="text-left text-muted">August 26, 2013</p>
              <p className="text-right text-muted" id="number">
                14
              </p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
          <div className="col-lg-4">
            <img src={NewsImage} alt="smth" />
            <p className="date">
              <p className="text-left text-muted">August 26, 2013</p>
              <p className="text-right text-muted" id="number">
                14
              </p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="sport">
        <div className="lead">
          <h2>Sport</h2>
          <p>
            <a href="single.html">
              <u>See all</u>
            </a>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src={NewsImage} alt="smth" />
            <p className="date">
              <p className="text-left text-muted">August 26, 2013</p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
          <div className="col-lg-4">
            <img src={NewsImage} alt="smth" />
            <p className="text-left text-muted">August 26, 2013</p>
            <p className="description">
              <strong>
                <a href="single.html">
                  NASA releases portrait of a planet waving at Saturn
                </a>
              </strong>
            </p>
          </div>
          <div className="col-lg-4">
            <img src={NewsImage} alt="smth" />
            <p className="text-left text-muted">August 26, 2013</p>
            <p className="description">
              <strong>
                <a href="single.html">
                  Patriotsvv make cuts ... and Tim Tebow survives (so far)
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="box">Banner</div>
      </div>
      <div className="business">
        <div className="lead">
          <h2>Business</h2>
          <p>
            <a href="single.html">
              <u>See all</u>
            </a>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img className="float-left" src={businessImage} alt="smth" />
            <p className="date">
              <p className="text-muted ">August 26, 2013</p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
          <div className="col-lg-6">
            <img className="float-left" src={businessImage} alt="smth" />
            <p className="date">
              <p className="text-muted">August 26, 2013</p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img className="float-left" src={businessImage} alt="smth" />
            <p className="date">
              <p className="text-muted ">August 26, 2013</p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
          <div className="col-lg-6">
            <img className="float-left" src={businessImage} alt="smth" />
            <p className="date">
              <p className="text-muted">August 26, 2013</p>
            </p>
            <p className="description">
              <strong>
                <a href="single.html">
                  For Obama, MLK's shadow looms large ahead of speech
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="banner">
            <div className="box">Banner</div>
          </div>
        </div>
      </div>

      <div className="lead">
        <h2>News Carousel</h2>
        <div className="arrows">
          <a href="#myCarousel" role="button" data-slide="prev">
            <img className="left-arrow" src={leftArrow} alt="left-arrow" />
          </a>
          <a href="#myCarousel" role="button" data-slide="next">
            <img className="right-arrow" src={rightArrow} alt="right-arrow" />
          </a>
        </div>
      </div>
      <Carousel
        controls={false}
        indicators={false}
        nextIcon={rightArrow}
        prevIcon={leftArrow}
      >
        <Carousel.Item interval={5000}>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="float-left w-100"
                src={carouselImage_1}
                alt="smth"
              />
              <p className="date">
                <p className="text-muted ">August 26, 2013</p>
              </p>
              <p className="description">
                <strong>
                  <a href="single.html">
                    For Obama, MLK's shadow looms large ahead of speech
                  </a>
                </strong>
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="float-left w-100"
                src={carouselImage_1}
                alt="smth"
              />
              <p className="date">
                <p className="text-muted">August 26, 2013</p>
              </p>
              <p className="description">
                <strong>
                  <a href="single.html">
                    For Obama, MLK's shadow looms large ahead of speech
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="float-left w-100"
                src={carouselImage_2}
                alt="smth"
              />
              <p className="date">
                <p className="text-muted ">August 26, 2013</p>
              </p>
              <p className="description">
                <strong>
                  <a href="single.html">
                    Palestinians call off peace talks after clash
                  </a>
                </strong>
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="float-left w-100"
                src={carouselImage_2}
                alt="smth"
              />
              <p className="date">
                <p className="text-muted">August 26, 2013</p>
              </p>
              <p className="description">
                <strong>
                  <a href="single.html">
                    Palestinians call off peace talks after clash
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="float-left w-100"
                src={carouselImage_3}
                alt="smth"
              />
              <p className="date">
                <p className="text-muted ">August 26, 2013</p>
              </p>
              <p className="description">
                <strong>
                  <a href="single.html">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </a>
                </strong>
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="float-left w-100"
                src={carouselImage_3}
                alt="smth"
              />
              <p className="date">
                <p className="text-muted">August 26, 2013</p>
              </p>
              <p className="description">
                <strong>
                  <a href="single.html">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div class="row">
        <div class="col-lg-6">
          <div
            id="myCarousel2"
            class="editorials carousel slide"
            data-ride="carousel"
          >
            <div class="lead">
              <h2>Editorials</h2>
              <div class="arrows">
                <a href="#myCarousel2" role="button" data-slide="prev">
                  <img
                    class="left-arrow"
                    src={carouselLeftArrow}
                    alt="left-arrow"
                  />
                </a>
                <a href="#myCarousel2" role="button" data-slide="next">
                  <img
                    class="right-arrow"
                    src={carouselRightArrow}
                    alt="right-arrow"
                  />
                </a>
              </div>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="float-left w-100"
                  src={carouselImage_1}
                  alt="smth"
                />
                <p class="date">
                  <p class="text-muted ">August 26, 2013</p>
                </p>
                <p class="description">
                  <strong>
                    {" "}
                    <a href="single.html">
                      For Obama, MLK's shadow looms large ahead of speech{" "}
                    </a>{" "}
                  </strong>
                </p>
              </div>
              <div class="carousel-item ">
                <img
                  class="float-left w-100"
                  src={carouselImage_2}
                  alt="smth"
                />
                <p class="date">
                  <p class="text-muted ">August 26, 2013</p>
                </p>
                <p class="description">
                  <strong>
                    {" "}
                    <a href="single.html">
                      Palestinians call off peace talks after clash
                    </a>
                  </strong>
                </p>
              </div>
              <div class="carousel-item ">
                <img
                  class="float-left w-100"
                  src={carouselImage_3}
                  alt="smth"
                />
                <p class="date">
                  <p class="text-muted ">August 26, 2013</p>
                </p>
                <p class="description">
                  <strong>
                    {" "}
                    <a href="single.html">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </a>{" "}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            id="myCarousel3"
            class="local-news carousel slide"
            data-ride="carousel"
          >
            <div class="lead">
              <h2>Local news</h2>
              <div class="arrows">
                <a href="#myCarousel3" role="button" data-slide="prev">
                  <img
                    class="left-arrow"
                    src={carouselLeftArrow}
                    alt="left-arrow"
                  />
                </a>
                <a href="#myCarousel3" role="button" data-slide="next">
                  <img
                    class="right-arrow"
                    src={carouselRightArrow}
                    alt="right-arrow"
                  />
                </a>
              </div>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="float-left w-100"
                  src={carouselImage_1}
                  alt="smth"
                />
                <p class="date">
                  <p class="text-muted ">August 26, 2013</p>
                </p>
                <p class="description">
                  <strong>
                    {" "}
                    <a href="single.html">
                      For Obama, MLK's shadow looms large ahead of speech
                    </a>{" "}
                  </strong>
                </p>
              </div>
              <div class="carousel-item ">
                <img
                  class="float-left w-100"
                  src={carouselImage_2}
                  alt="smth"
                />
                <p class="date">
                  <p class="text-muted ">August 26, 2013</p>
                </p>
                <p class="description">
                  <strong>
                    {" "}
                    <a href="single.html">
                      Palestinians call off peace talks after clash{" "}
                    </a>
                  </strong>
                </p>
              </div>
              <div class="carousel-item ">
                <img
                  class="float-left w-100"
                  src={carouselImage_3}
                  alt="smth"
                />
                <p class="date">
                  <p class="text-muted ">August 26, 2013</p>
                </p>
                <p class="description">
                  <strong>
                    {" "}
                    <a href="single.html">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentHome;

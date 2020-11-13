import React from "react";
import Nav from "../components/Nav";
import Aside from "../components/Aside";
import MainContentHome from "../components/MainContentHome";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <MainContentHome />
          </div>
          <div className="col-lg-4">
            <Aside />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;

import React from "react";
import Navbar1 from "../Navbar1";

const Home1 = () => {
  return (
    <div className="home1">
      <Navbar1 />
      <div class="container text-center">
        <br />
        <h1 class="text-center">Finance - Accounts</h1>
        <br />
        <h1 class="text-center">Welcome to Faculty Section</h1>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">
            <a href="/cont" class="pull-left">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;

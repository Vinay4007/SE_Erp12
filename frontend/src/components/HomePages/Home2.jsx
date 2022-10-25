import React from "react";
import Navbar2 from "../Navbar2";

const Home2 = () => {
  return (
    <div className="home1">
      <Navbar2 />
      <div class="container text-center">
        <br />
        <h1 class="text-center">Finance - Accounts</h1>
        <br />
        <h1 class="text-center">Welcome to Admin Section</h1>
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

export default Home2;

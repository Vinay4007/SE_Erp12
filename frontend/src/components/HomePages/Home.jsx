import React from "react";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="print">
      <Navbar />
      <div class="container text-center">
        <br />
        <h1 class="text-center">Finance - Accounts</h1>
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

export default Home;

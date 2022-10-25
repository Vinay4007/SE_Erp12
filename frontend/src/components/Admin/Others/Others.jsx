import React from "react";
import Navbar2 from "../../Navbar2";
import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
const Others = () => {
  //this is general ledger component

  return (
    <div>
      <Navbar2 />
      <br></br>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div>
            <br />
            <br />
            <Link to="/bsg" class="btn btn-dark btn-lg">
              Balancesheet Generator
            </Link>
            <br></br>
            <br></br>
          </div>
          <br />
          <br />
          <div>
            <a href=" " class="btn btn-dark btn-lg ">
              Trail Balanced Profit-Loss Sheet
            </a>
          </div>
          <br></br>
        </div>

        <div class="col"></div>
        <div class="col"></div>

        <div class="col"></div>
      </div>
    </div>
  );
};

export default Others;

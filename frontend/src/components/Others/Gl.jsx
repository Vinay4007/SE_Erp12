import React from "react";
import Navbar from "../Navbar";

//change everything
// commented time - 12.23am 19-09-2022
const GeneralLedger = () => {
  return (
    <div>
      <Navbar />
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <br></br>
          <a href="/sp" class="btn btn-secondary btn-lg">
            Students
          </a>
          <br></br>
          <br></br>
          <br />
          <a href="/eal" class="btn btn-secondary btn-lg">
            Faculty
          </a>
          <br></br>
          <br></br>
        </div>

        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
  );
};
export default GeneralLedger;

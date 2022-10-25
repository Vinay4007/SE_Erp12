import React from "react";
import Navbar from "../Navbar";

const Curp = () => {
  return (
    <div className="compr">
      <Navbar />
      <br></br>
      <br></br>

      <div class="row">
        <div class="col"></div>

        <div class="col">
          <h3>Click to Download your receipts</h3> <br></br>
          <br></br>
          <div class="form-check form-check-inline">
            <select class="form-select">
              <option selected="">Select Sem</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div class="form-check form-check-inline"></div>
          <input type="submit"></input>
        </div>

        <div class="col"></div>
      </div>
      <br />
    </div>
  );
};

export default Curp;

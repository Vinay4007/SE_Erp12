import React from "react";
import Navbar2 from "../../../Navbar2";

const Userper = () => {
  return (
    <div>
      <Navbar2 />
      <br />
      <div>
        <div></div>
        <br />
        <br />
        <br />
      </div>

      <div class="vstack gap-2">
        <div class="bg-light border">
          <br></br>
          <div class="row">
            <div class="col"></div>
            <div class="col"></div>

            <div class="col">
              <a href="/request" class="btn btn-warning btn-lg">
                Send Request
              </a>
            </div>
            <div class="col"></div>

            <div class="col">
              <a href="/paycul" class="btn btn-warning btn-lg">
                Receipts
              </a>
            </div>

            <div class="col"></div>
            <div class="col"></div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};
export default Userper;

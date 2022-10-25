import React from "react";
import Navbar2 from "../../Navbar2";

const Budgets = () => {
  return (
    <div className="sp">
      <Navbar2 />
      <br />
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <br></br>
          <div>
            <a href="/csbud" class="btn btn-primary">
              CSE Department{" "}
            </a>
            <br />
          </div>
          <br />

          <div>
            <a href="/eebud" class="btn btn-primary">
              EE Department{" "}
            </a>
          </div>
          <br />

          <div>
            <a href="/mebud" class="btn btn-primary">
              ME Department{" "}
            </a>
          </div>
          <br />

          <div>
            <a href="/chbud" class="btn btn-primary">
              Chemical Department{" "}
            </a>
          </div>
          <br />

          <div>
            <a href="/cebud" class="btn btn-primary">
              Civil Department
            </a>
          </div>
          <br />
        </div>

        <div class="col"></div>

        <div class="col"></div>
        <div class="col"></div>
      </div>
      <br />
    </div>
  );
};

export default Budgets;

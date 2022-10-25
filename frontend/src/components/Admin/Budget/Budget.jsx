import React from "react";
import Navbar2 from "../../Navbar2";

const Budget = () => {
  return (
    <div>
      <Navbar2 />
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <br></br>
          <br />
          <br />
          <br />
          <a href="/dpb" class="btn btn-info btn-lg">
            Department Budget tracking
          </a>
          <br></br>
          <br></br>
          <br />
          <br />
          <a href="/budget" class="btn btn-info btn-lg">
            Department Impreset
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
export default Budget;

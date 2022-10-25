import React from "react";
import Navbar2 from "../../Navbar2";
import { Link } from "react-router-dom";

const Facultyadmin = () => {
  return (
    <div className="stuadmin">
      <Navbar2 />
      <br></br>
      <br></br>
      <br></br>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div>
            <Link to="/facadm1" class="btn btn-primary btn-lg">
              A{" "}
            </Link>
          </div>
          <br />
          <br />

          <div>
            <Link to="/facadm2" class="btn btn-primary btn-lg">
              B{" "}
            </Link>
            <br />
            <br />
            <br />
          </div>
          <div>
            <a class="btn btn-primary btn-lg" href="/addfac" role="button">
              Create User
            </a>
          </div>
        </div>

        <div class="col"></div>

        <div class="col"></div>
      </div>
    </div>
  );
};

export default Facultyadmin;

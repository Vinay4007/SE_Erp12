import React from "react";
import Navbar2 from "../../Navbar2";
import { Link } from "react-router-dom";

const Studentadmin = () => {
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
            <Link to="/stuadm1" class="btn btn-primary btn-lg">
              Tution Fees{" "}
            </Link>
          </div>
          <br />
          <br />

          <div>
            <Link to="/stuadm2" class="btn btn-primary btn-lg">
              Hostel fees{" "}
            </Link>
            <br />
            <br />
            <br />
          </div>
          <div>
            <a class="btn btn-success btn-lg" href="/addStu" role="button">
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

export default Studentadmin;

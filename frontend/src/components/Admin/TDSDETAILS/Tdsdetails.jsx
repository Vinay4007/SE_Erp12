import React from "react";
import Navbar2 from "../../Navbar2";
import { Link } from "react-router-dom";

const TDSDETAILS = () => {
  return (
    <div className="stuadmin">
      <Navbar2 />
      <br></br>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <br></br>
          <div>
            <Link to="/tdsadm1" class="btn btn-primary">
              Generate Monthly Statements{" "}
            </Link>
            <br />
          </div>
          <br />
          <br />

          <div>
            <Link to="/tdsadm2" class="btn btn-primary">
              Generate Form24Q{" "}
            </Link>
          </div>
          <br />
          <br />
          <div>
            <Link to="/mailtds" class="btn btn-primary">
              Send Receipts via Mail
            </Link>
            <br />
          </div>
        </div>

        <div class="col"></div>

        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default TDSDETAILS;

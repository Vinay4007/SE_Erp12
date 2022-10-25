import React from "react";
import Navbar from "../Navbar";
import qrh from "../../images/qrh.png";
import { Link } from "react-router-dom";

const QrM = () => {
  return (
    <div className="qr">
      <Navbar />
      <br />
      <br />
      <div className="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 text-center">
          <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=64638">
            <img src={qrh} alt="pay qr" height={456} />
          </a>
          <br />
          <br />
          <Link to="/pay3" className="btn btn-outline-dark btn-lg">
            Go Back to Payment
          </Link>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  );
};

export default QrM;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const HostelAcc = () => {
  //this is general ledger component

  return (
    <>
      <div className="ha">
        <Navbar />

        {/* 1.pay fees buttton selct option upto 8 with null
        2.history */}
        <a href="/cultural" class="btn btn-info btn-sm">
          Cultural
        </a>
        <div>
          <Link to="/ps">Payment History </Link>
        </div>
      </div>
    </>
  );
};

export default HostelAcc;

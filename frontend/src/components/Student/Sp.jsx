import React from "react";
import Navbar from "../Navbar";
import FileDownload from "js-file-download";
import Axios from "axios";

function SponProj() {
  //this is general ledger component
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:8080",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "Tution.pdf");
    });
  };

  return (
    <div className="sp">
      <Navbar />
      <br />
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <br></br>
          <div>
            <a href="/pay1" class="btn btn-primary btn-lg">
              Tution Fees{" "}
            </a>
            <br />
          </div>
          <br />
          <br />

          <div>
            <a href="/pay3" class="btn btn-primary btn-lg">
              Hostel fees{" "}
            </a>
            <br />
            <br />
            <br />
          </div>
          <div>
            <a
              href=""
              onClick={(e) => download(e)}
              class="btn btn-success btn-lg"
            >
              Tution Fees Structure
            </a>
            <br />
          </div>
          <br />
          <br />
        </div>

        <div class="col"></div>

        <div class="col"></div>
        <div class="col"></div>
      </div>
      <br />
    </div>
  );
}

export default SponProj;

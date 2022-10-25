import React from "react";
import Navbar2 from "../../Navbar2";
const SendReceipt = () => {
  return (
    <div>
      <Navbar2 />
      <div className="req" class="text-center">
        <h1>
          <small>Scholarship Receipt</small>
        </h1>
      </div>
      <br />
      <form>
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div class="form-group row">
              <label for="st" class="col-sm-1">
                <b>Email</b>
              </label>
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  placeholder="email@123"
                />
              </div>
            </div>
            <br />
            <div class="form-group row">
              <div class="form-inline">
                <br />
                <div class="col-sm-12">
                  <label for="formFileMultiple" class="form-label">
                    Upload Receipt
                  </label>

                  <input class="form-control form-check-inline" type="file" />
                </div>
                <br />
              </div>
              <br />

              <button type="button" class="btn btn-success">
                Submit
              </button>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default SendReceipt;

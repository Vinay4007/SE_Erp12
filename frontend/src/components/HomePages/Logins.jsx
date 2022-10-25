import React from "react";
import { NavLink } from "react-router-dom";

export function Logins() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-3">
          <div className="card text-center bg-light border-dark">
            <div className="card-body">
              <h5 className="card-title">Welcome</h5>
              <br />
              <br />
              <NavLink to="login" className="btn btn-primary">
              Student Login
              </NavLink>
              <br />
              <br />
              <NavLink to ="login1" className="btn btn-primary">
                Faculty Login
              </NavLink>
              <br />
              <br />
              <NavLink to ="login2" className="btn btn-primary">
                Admin Login
              </NavLink>

              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="col-sm-5"></div>
      </div>
    </div>
  );
};

export default Logins;

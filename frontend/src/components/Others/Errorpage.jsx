import React from "react";
import { NavLink } from "react-router-dom";
//import Navbar from './Navbar';

const Errorpage = () => {
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Page not found!</h2>

          <NavLink to="/">Back to Homepage</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;

import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

//import profilepic from "../images/it.jpg";
const About = () => {
  const [userData, setUserData] = useState({});

  const CallAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    CallAboutPage();
  }, []);

  return (
    <>
      <div className="container user-profile">
        <form method="">
          <div className="row">
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>From Mars</h6>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="home-tab"
                      data-toggle="tab"
                      to=""
                      role="tab"
                    >
                      About
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                         <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Profile</a>
                         </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;

import React, { useState } from "react";
//import React from 'react';
import Navbar2 from "../../Navbar2";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 422) {
      window.alert("fill all the fields");
      console.log("INVALID REGISTRATION");
    } else if (!data) {
      window.alert("INVALID REGISTRATION");
    } else {
      window.alert("REGISTRATION SUCCESS");
      console.log("Successfull REGISTRATION");


    }
  };

  return (
    <>
      <Navbar2 />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <br />
          <div class="card bg-light border-dark">
            <section className="signup">
              <div classname="container mt-5">
                <div classname="signup-form">
                  <br />
                  <h3 className="form-title text-center">Add Student</h3>
                  <br />
                  <form
                    method="POST"
                    classname="register-form"
                    id="register-form"
                  >
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="name" class="mt-1">
                          Student Name
                        </label>
                      </div>

                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            autoComplete="off"
                            value={user.name}
                            onChange={handleInputs}
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-3"></div>
                    </div>

                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="email" class="mt-1">
                          Student Email
                        </label>
                      </div>
                      <div class="col-md-5">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            class="form-control"
                            value={user.email}
                            onChange={handleInputs}
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-3"></div>
                    </div>

                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="phone" class="mt-1">
                          Phone Number
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            class="form-control"
                            autoComplete="off"
                            value={user.phone}
                            onChange={handleInputs}
                            placeholder="Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-4"></div>
                    </div>

                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="password" class="mt-1">
                          Password
                        </label>
                      </div>
                      <div class="col-md-3">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="password"
                            id="password"
                            class="form-control"
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInputs}
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="col-md-5"></div>
                    </div>
                    <br />
                    <br />
                    <div className="form-group form-button text-center">
                      <input
                        type="submit"
                        name="signup"
                        id="signup"
                        className="form-submit btn btn-warning"
                        value="Create"
                        onClick={PostData}
                      />
                    </div>
                  </form>
                </div>
                <br />
              </div>
            </section>
          </div>
          <br />
        </div>
        <div class="col-md-3 text-center"></div>
      </div>
    </>
  );
};

export default Signup;

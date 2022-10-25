import React, { useState } from "react";
//import React from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
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

    const { email, password } = user;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid CREDENTIALS");
      console.log("INVALID CREDENTIALS");
    } else {
      window.alert("Login Successful");
      console.log("Successful Login");
    }
  };

  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="card bg-light border-dark">
              <div class="card-body">
                <h4 class="card-title text-center">Student Sign-in</h4>
                <br />
                <form
                  method="POST"
                  classname="register-form"
                  id="register-form"
                >
                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 mb-3">
                      <label for="email" class="text-left">
                        Enter Email
                      </label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="inputGroupPrepend2"
                          >
                            @
                          </span>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="form-control"
                          autoComplete="on"
                          value={user.email}
                          onChange={handleInputs}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                  </div>

                  <br />

                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 mb-3">
                      <label for="Password" class="text-left">
                        Enter Password
                      </label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="inputGroupPrepend2"
                          >
                            *
                          </span>
                        </div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          class="form-control "
                          autoComplete="off"
                          value={user.password}
                          onChange={handleInputs}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                  </div>

                  <br />

                  <div className="form-group form-button text-center">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit btn btn-primary"
                      value="Login"
                      onClick={PostData}
                    />
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;

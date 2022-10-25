import React, { useState } from "react";
import Navbar1 from "../Navbar1";
// import Navbar from './Navbar';

const Newadvance = () => {
  const [adv, setadv] = useState({
    name: "",
    email: "",
    phone: "",
    advancereq: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setadv({ ...adv, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, advancereq } = adv;

    const res = await fetch("/adv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        advancereq,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Fill all the fields");
      //console.log("INVALID REGISTRATION");
    } else {
      window.alert("Request Sent Successfully");
      //console.log("Successfull REGISTRATION");

    }
  };

  return (
    <div className="newadv">
      <Navbar1 />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <br />
          <div class="card bg-light border-dark">
            <section class="advdata">
              <h4 class="h1-responsive font-weight-bold text-center mt-3">
                Request Advance
              </h4>
              <br />

              <div class="row">
                <div class="col-md-12 ">
                  <form method="POST" classname="adv-form" id="adv-form">
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="name" class="mt-1">
                          Name
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            autoComplete="off"
                            value={adv.name}
                            onChange={handleInputs}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="email" class="mt-1">
                          Email
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            class="form-control"
                            autoComplete="off"
                            value={adv.email}
                            onChange={handleInputs}
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="phone" class="mt-1">
                          Phone
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            class="form-control"
                            autoComplete="off"
                            value={adv.phone}
                            onChange={handleInputs}
                            placeholder="Your Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="advancereq" class="mt-1">
                          Request Message{" "}
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form">
                          <textarea
                            type="text"
                            id="advancereq"
                            name="advancereq"
                            class="form-control"
                            value={adv.advancereq}
                            onChange={handleInputs}
                            placeholder="Your Request"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                  </form>

                  <br />

                  <div className=" text-center form-group form-button">
                    <input
                      type="submit"
                      name="loandata"
                      id="loandata"
                      className="form-submit btn btn-primary"
                      value="Submit"
                      onClick={PostData}
                    />
                  </div>
                  <br />
                </div>
              </div>
            </section>
          </div>
          <br />
        </div>

        <div class="col-sm-3 text-center"></div>
      </div>
    </div>
  );
};

export default Newadvance;

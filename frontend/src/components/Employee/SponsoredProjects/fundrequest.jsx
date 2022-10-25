import React, { useState } from "react";
import Navbar2 from "../../Navbar2";
// import { useHistory} from 'react-router-dom';

const NewFund = () => {
  //    const history = useHistory();
  const [fund, setfund] = useState({
    name: "",
    email: "",
    phone: "",
    prevfunddetails: "",
    fundingamount: "",
    message: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setfund({ ...fund, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, prevfunddetails, fundingamount, message } =
      fund;

    const res = await fetch("/fund", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        prevfunddetails,
        fundingamount,
        message,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("fill all the fields");
      //console.log("INVALID REGISTRATION");
    } else {
      window.alert("Request Sent Successfully");
      //console.log("Successfull REGISTRATION");

      //history.push("/login")
    }
  };

  return (
    <div className="newlo">
      <Navbar2 />

      <section class="funddata">
        <h2 class="h1-responsive font-weight-bold text-center ">
          Proposal form for Colloborating
        </h2>

        <br />

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              method="POST"
              enctype="multipart/form-data"
              id="fund-form"
              name="fund-form"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name" class="">
                      Title
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      value={fund.name}
                      onChange={handleInputs}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="">
                      Department
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      value={fund.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>

              <br />
              <div class="row">
                <div class="col-md-5">
                  <div class="md-form mb-0">
                    <label for="phone" class="">
                      Aim of the Project
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      class="form-control"
                      value={fund.phone}
                      onChange={handleInputs}
                      placeholder="Your Number"
                    />
                  </div>
                </div>
              </div>

              <br />
              <div class="row">
                <div class="col-md-8">
                  <div class="md-form">
                    <label for="prevfunddetails">Duration of Project</label>
                    <input
                      type="number"
                      id="prevfunddetails"
                      name="prevfunddetails"
                      class="form-control"
                      value={fund.prevfunddetails}
                      onChange={handleInputs}
                      placeholder="In Years"
                    />
                    <br />
                  </div>
                </div>
                <br />
                <div class="col-md-8">
                  <div class="md-form mb-0">
                    <label for="fundingamount" class="">
                      Sponsoring Agency
                    </label>
                    <input
                      type="text"
                      id="fundingamount"
                      name="fundingamount"
                      class="form-control"
                      value={fund.fundingamount}
                      onChange={handleInputs}
                      placeholder=""
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="message" class="">
                      Funding Amount
                    </label>
                    <input
                      type="number"
                      id="message"
                      name="message"
                      class="form-control"
                      value={fund.message}
                      onChange={handleInputs}
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="message" class="">
                      Upload File
                    </label>
                    <input
                      type="file"
                      id="message"
                      name="uploaded_file"
                      class="form-control-file"
                      value={fund.message}
                      onChange={handleInputs}
                      placeholder="Your Name"
                    />
                  </div>
                </div>
              </div>
            </form>
            <br />
            <br />

            <div className="form-group form-button text-center">
              <input
                type="submit"
                name="funddata"
                id="funddata"
                className="form-submit"
                value="Submit"
                onClick={PostData}
              />
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewFund;

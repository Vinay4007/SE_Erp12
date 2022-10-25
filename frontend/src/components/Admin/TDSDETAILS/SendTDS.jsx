import React, { useState } from "react";
import Navbar2 from "../../Navbar2";

const SendTDS = () => {
  const [tdsdata, settds] = useState({
    email: "",
    subject: "",
    text: "",
  });

  let email, value;

  const handleInputs = (e) => {
    console.log(e);
    email = e.target.email;
    value = e.target.value;

    settds({ ...tdsdata, [email]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { email, subject, text } = tdsdata;

    const res = await fetch("/sendtds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        subject,
        text,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("fill all the fields");
      //console.log("INVALID ");
    } else {
      window.alert("Mail sent successfully");
      //console.log("Successfull ");

    }
  };

  return (
    <div className="tds">
      <Navbar2 />

      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-5">
          <br />
          <div class="card bg-light border-dark">
            <section class="tdsdata">
              <h4 class="h1-responsive font-weight-bold text-center mt-3 ">
                Send TDS details
              </h4>

              <br />
              <br />

              <div class="row">
                <div class="col">
                  <form method="POST" id="tds-form" email="tds-form">
                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="email" class="mt-1">
                          Email
                        </label>
                      </div>
                      <div class="col-md-5">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            email="email"
                            class="form-control"
                            autoComplete="off"
                            value={tdsdata.email}
                            onChange={handleInputs}
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 text-end"></div>
                    </div>
                    <br />
                    <br />

                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="Subject" class="mt-1">
                          Subject
                        </label>
                      </div>
                      <div class="col-md-5">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            subject="subject"
                            class="form-control"
                            autoComplete="off"
                            value={tdsdata.subject}
                            onChange={handleInputs}
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 text-end"></div>
                    </div>
                    <br />
                    <br />

                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="text" class="mt-1">
                          Text
                        </label>
                      </div>
                      <div class="col-md-7">
                        <div class="md-form mb-0">
                          <textarea
                            type="text"
                            id="text"
                            email="text"
                            class="form-control"
                            autoComplete="off"
                            value={tdsdata.text}
                            onChange={handleInputs}
                            placeholder="Text"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                  </form>
                  <br />
                  <br />

                  <div className="form-group form-button text-center">
                    <input
                      type="submit"
                      email="tdsdata"
                      id="tdsdata"
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
        <div class="col-md-3"></div>
      </div>
    </div>
  );
};

export default SendTDS;

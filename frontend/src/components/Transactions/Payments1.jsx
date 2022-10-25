import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

const Payments1 = () => {
  const [tutfee, settut] = useState({
    name: "",
    email: "",
    branch: "",
    semester: "",
    amount: "",
  });

  // const CalltutPage = async () => {
  //     try{
  //       const res = await fetch('/admstutut',{
  //         method:"GET",
  //         headers: {
  //             Accept:"application/json",
  //             "Content-Type": "application/json"
  //         },
  //         credentials:"include"
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //       settut(data);
  //       if(!res.status === 200){
  //         const error = new Error(res.error);
  //         throw error;
  //       }

  //     }catch(err){
  //       console.log(err);
  //       history.push('/login');
  //     }

  // }

  const getDetails = async () => {
    try {
      let data = await axios.get("http://localhost:8080/AfeeDetails");
      console.log(data.data.data);
      let detail = data.data.data;
      //settut({name:data})
      settut({
        name: detail.name,
        email: detail.email,
        branch: detail.branch,
        semester: "1",
        amount: detail.amount,
      });
    } catch (err) {}
  };
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    settut({ ...tutfee, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, branch, semester, amount } = tutfee;

    const res = await fetch("/tutionfee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        branch,
        semester,
        amount,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Fee Payment Failed");
    } else {
      window.alert("Scan QR CODE TO PAY");
    }
  };

  useEffect(() => {
    //CalltutPage();
    getDetails();
  }, []);

  return (
    <div className="pay1">
      <Navbar />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <br />
          <div class="card bg-light border-dark">
            <section class="tutionfee">
              <h4 class="h1-responsive font-weight-bold text-center mt-3">
                Semester Tution fees
              </h4>

              <br />

              <div class="row">
                <div class="col-md-12">
                  <form method="POST" id="fee-form" name="fee-form">
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
                            value={tutfee.name}
                            onChange={handleInputs}
                            placeholder="Your Name"
                            disabled="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
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
                            value={tutfee.email}
                            onChange={handleInputs}
                            placeholder="Your email"
                            disabled="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="branch" class="mt-1">
                          Branch
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="branch"
                            id="branch"
                            class="form-control"
                            autoComplete="off"
                            value={tutfee.branch}
                            onChange={handleInputs}
                            placeholder="Your branch"
                            disabled="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="semester" class="mt-1">
                          Semester
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            name="semester"
                            id="semester"
                            class="form-control"
                            autoComplete="off"
                            value={tutfee.semester}
                            onChange={handleInputs}
                            placeholder="Sem"
                          />
                        </div>
                      </div>
                      <div class="col-md-4"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="amount" class="mt-1">
                          Amount
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            id="amount"
                            name="amount"
                            class="form-control"
                            autoComplete="off"
                            value={tutfee.amount}
                            onChange={handleInputs}
                            placeholder="Enter Amount"
                            disabled="true"
                          />
                        </div>
                      </div>
                      <div class="col-md-4"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="message" class="mt-1">
                          Remarks{" "}
                        </label>
                      </div>

                      <div class="col-md-7">
                        <div class="md-form">
                          <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows="2"
                            class="form-control md-textarea"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-1"></div>
                    </div>
                    <br />
                  </form>

                  <br />

                  <div className=" text-center form-group form-button">
                    <input
                      type="submit"
                      name="tutionfee"
                      id="tutionfee"
                      className="form-submit btn btn-primary"
                      value="Submit to Pay"
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
        <div class="col-sm-3 text-center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="row">
            <div class="text-end col-md-9 ">
              <a href="/compr" class="btn btn-warning">
                Transactions history{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments1;

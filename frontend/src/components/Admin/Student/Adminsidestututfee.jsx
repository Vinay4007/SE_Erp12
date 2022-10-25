import React, { useState } from "react";
import Navbar2 from "../../Navbar2";

const Filling1 = () => {
  const [admtutfee, setadmtut] = useState({
    id: "",
    name: "",
    email: "",
    branch: "",
    amount: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setadmtut({ ...admtutfee, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { id, name, email, branch, amount } = admtutfee;

    const res = await fetch("/admtutionfee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        email,
        branch,
        amount,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Tution fee data did not updated");
    } else {
      window.alert("Tution fee data successfully submitted");
    }
  };

  return (
    <div className="fill1">
      <Navbar2 />
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
                        <label for="email" class="mt-1">
                          Student ID
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="id"
                            id="id"
                            class="form-control"
                            autoComplete="off"
                            value={admtutfee.id}
                            onChange={handleInputs}
                            placeholder="Enter Student ID"
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                    <br />

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
                            value={admtutfee.name}
                            onChange={handleInputs}
                            placeholder="Student Name"
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
                            value={admtutfee.email}
                            onChange={handleInputs}
                            placeholder="Enter Student email"
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
                            value={admtutfee.branch}
                            onChange={handleInputs}
                            placeholder="Enter Student branch"
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
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
                            value={admtutfee.amount}
                            onChange={handleInputs}
                            placeholder="Enter Student Fee"
                          />
                        </div>
                      </div>
                      <div class="col-md-4"></div>
                    </div>
                    <br />

                    <br />
                  </form>

                  <br />

                  <div className=" text-center form-group form-button">
                    <input
                      type="submit"
                      name="tutionfee"
                      id="tutionfee"
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
      </div>
    </div>
  );
};

export default Filling1;

import React, { useState } from "react";
import Navbar1 from "../Navbar1";
// import { useHistory} from 'react-router-dom';

const NewLo = () => {
  //    const history = useHistory();
  const [loan, setLoan] = useState({
    name: "",
    email: "",
    phone: "",
    loannum: "",
    bankname: "",
    loanbankname: "",
    emileft: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLoan({ ...loan, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, loannum, bankname, loanbankname, emileft } =
      loan;

    const res = await fetch("/newloan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        loannum,
        bankname,
        loanbankname,
        emileft,
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
    <div className="pay1">
      <Navbar1 />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <br />
          <div class="card bg-light border-dark">
            <section class="loandata">
              <h4 class="h1-responsive font-weight-bold text-center mt-3">
                Loan Details
              </h4>
              <br />

              <div class="row">
                <div class="col-md-12 ">
                  <form method="POST" classname="loan-form" id="loan-form">
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
                            value={loan.name}
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
                            value={loan.email}
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
                          Phone Number
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            class="form-control"
                            autoComplete="off"
                            value={loan.phone}
                            onChange={handleInputs}
                            placeholder="Your Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="bankname" class="mt-1">
                          Bank Name
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            id="bankname"
                            name="bankname"
                            class="form-control"
                            autoComplete="off"
                            value={loan.bankname}
                            onChange={handleInputs}
                            placeholder="Enter Bank Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="loannum" class="mt-1">
                          Loan Number
                        </label>
                      </div>
                      <div class="col-md-5">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            name="loannum"
                            id="loannum"
                            class="form-control"
                            autoComplete="off"
                            value={loan.loannum}
                            onChange={handleInputs}
                            placeholder="Loan Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-3 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="loanamount" class="mt-1">
                          Loan Amount{" "}
                        </label>
                      </div>

                      <div class="col-md-6">
                        <div class="md-form">
                          <input
                            type="text"
                            id="loanamount"
                            name="loanamount"
                            class="form-control"
                            value={loan.loanamount}
                            onChange={handleInputs}
                            placeholder="Loan Amount"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="emileft" class="mt-1">
                          EMI's Left
                        </label>
                      </div>
                      <div class="col-md-5">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="emileft"
                            name="emileft"
                            class="form-control"
                            autoComplete="off"
                            value={loan.emileft}
                            onChange={handleInputs}
                            placeholder="number of emi's left"
                          />
                        </div>
                      </div>
                      <div class="col-md-3 text-end"></div>
                    </div>
                    <br />
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

export default NewLo;

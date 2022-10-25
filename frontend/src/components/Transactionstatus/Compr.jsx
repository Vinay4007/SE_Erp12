import React, { useState } from "react";
// import { useHistory} from 'react-router-dom';
import Navbar from "../Navbar";

const Compr = () => {
  //    const history = useHistory()
  const [tutfee, settut] = useState({
    name: "",
    branch: "",
    semester: "",
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    settut({ ...tutfee, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, branch, semester } = tutfee;

    const res = await fetch("/tutfeestatus", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        name,
        branch,
        semester,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      window.alert("FEE NOT PAID");
      console.log("INVALID CREDENTIALS");
    } else {
      window.alert("FEE PAID");
      console.log("Successful Login");
      //history.push("/home")
    }
  };
  return (
    <div className="compr">
      <Navbar />
      <br></br>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <h3>Check your Tution Fee status</h3> <br></br>
          <form method="POST" className="sem-form" id="sem-form">
            <div class="row">
              <div class="col-md-10">
                <div class="md-form mb-0">
                  <label htmlFor="name" class="">
                    Full name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    autoComplete="off"
                    value={tutfee.name}
                    onChange={handleInputs}
                    placeholder="Full Name"
                  />
                </div>
              </div>
            </div>

            <br />
            <div class="row">
              <div class="col-md-10">
                <div class="md-form mb-0">
                  <label htmlFor="branch" class="">
                    Branch
                  </label>
                  <input
                    type="text"
                    name="branch"
                    id="branch"
                    class="form-control"
                    autoComplete="off"
                    value={tutfee.branch}
                    onChange={handleInputs}
                    placeholder="Branch"
                  />
                </div>
              </div>
            </div>

            <br />

            <div class="row">
              <div class="col-md-3">
                <div class="md-form mb-0">
                  <label htmlFor="semester" class="">
                    Semester
                  </label>
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
            </div>

            <br />
            <div class="row">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col form-check align-center">
                <input
                  type="submit"
                  name="tutfeecheck"
                  id="tutfeecheck"
                  className="form-submit"
                  value="Status"
                  onClick={PostData}
                />
              </div>
            </div>

            <br />
          </form>
          <div class="col"></div>
        </div>
        <div class="col"></div>
        <br />
      </div>
    </div>
  );
};

export default Compr;

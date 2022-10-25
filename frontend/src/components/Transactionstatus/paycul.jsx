import React, { useState } from "react";
// import { useHistory} from 'react-router-dom';
import Navbar from "../Navbar";

const Compr = () => {
  //    const history = useHistory()
  const [tutfee, settut] = useState({
    name: "",
    year: "",
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

    const { name, year } = tutfee;

    const res = await fetch("/tutfeestatus", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        name,
        year,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
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
          <h3>Receipt for Event</h3> <br></br>
          <form method="POST" className="rec-form" id="rec-form">
            <div class="row">
              <div class="col-md-10">
                <div class="md-form mb-0">
                  <label htmlFor="name" class="">
                    Event name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    autoComplete="off"
                    value={tutfee.name}
                    onChange={handleInputs}
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <br />
            <div class="row">
              <div class="col-md-10">
                <div class="md-form mb-0">
                  <label htmlFor="year" class="">
                    Year
                  </label>
                  <input
                    type="text"
                    name="year"
                    id="year"
                    class="form-control"
                    autoComplete="off"
                    value={tutfee.branch}
                    onChange={handleInputs}
                    placeholder="Year"
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
                  value="Receipt"
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

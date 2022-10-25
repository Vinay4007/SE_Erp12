import React, { useState } from "react";
import Navbar from "../Navbar";
// import { useHistory} from 'react-router-dom';

const FEEDBACK = () => {
  //    const history = useHistory();
  const [feed, setfeed] = useState({
    name: "",
    email: "",
    phone: "",
    rating: "",
    issues: "",
    suggestions: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setfeed({ ...feed, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, rating, issues, suggestions } = feed;

    const res = await fetch("/feed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        rating,
        issues,
        suggestions,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("fill all the fields");
      //console.log("INVALID REGISTRATION");
    } else {
      window.alert("Feedback Submitted Successfully");
      //console.log("Successfull REGISTRATION");

      //history.push("/login")
    }
  };

  return (
    <div className="feedback">
      <Navbar />

      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <br />
          <div class="card bg-light border-dark">
            <section class="feeddata">
              <h4 class="h1-responsive font-weight-bold text-center mt-3 ">
                MESS FEEDBACK
              </h4>

              <br />

              <div class="row">
                <div class="col-md-12 ">
                  <form method="POST" id="feed-form" name="feed-form">
                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="name" class="mt-1">
                          Name
                        </label>
                      </div>

                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control"
                            value={feed.name}
                            onChange={handleInputs}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-3"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="email" class="mt-1">
                          Email
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            class="form-control"
                            value={feed.email}
                            onChange={handleInputs}
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-3 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="phone" class="mt-1">
                          Phone
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            class="form-control"
                            value={feed.phone}
                            onChange={handleInputs}
                            placeholder="Your Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-5 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="rating" class="mt-1">
                          Rating
                        </label>
                      </div>

                      <div class="col-md-4">
                        <div class="md-form">
                          <input
                            type="number"
                            id="rating"
                            name="rating"
                            class="form-control"
                            value={feed.rating}
                            onChange={handleInputs}
                            placeholder="Your Rating"
                          />
                        </div>
                      </div>
                      <div class="col-md-5 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="issues" class="mt-1">
                          Issues
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <textarea
                            type="text"
                            id="issues"
                            name="issues"
                            class="form-control"
                            value={feed.issues}
                            onChange={handleInputs}
                            placeholder="Your Issues"
                          />
                        </div>
                      </div>
                      <div class="col-md-3 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-3 text-end">
                        <label for="suggestions" class="mt-1">
                          Suggestions
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <textarea
                            type="text"
                            id="suggestions"
                            name="suggestions"
                            class="form-control"
                            value={feed.suggestions}
                            onChange={handleInputs}
                            placeholder="Your Suggestions"
                          />
                        </div>
                      </div>
                      <div class="col-md-3 text-end"></div>
                    </div>
                  </form>
                  <br />

                  <div className="form-group form-button text-center">
                    <input
                      type="submit"
                      name="feeddata"
                      id="feeddata"
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
        <div class="col-md-3 text-center"></div>
      </div>
    </div>
  );
};

export default FEEDBACK;

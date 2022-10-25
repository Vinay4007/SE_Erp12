import React from "react";

const Contact = () => {
  return (
    <section class="mb-7">
      <h2 class="h1-responsive font-weight-bold text-center ">Contact us</h2>

      <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="name" class="">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                  ></input>
                </div>
              </div>

              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="email" class="">
                    Your email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                  ></input>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="subject" class="">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="form-control"
                  ></input>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <label for="message">Your message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div class="text-center text-md-left">
            <a
              href="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
            >
              Submit
            </a>
          </div>
          <div class="status"></div>
        </div>

        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fas fa-map-marker-alt fa-2x"></i>
              <p>Academic Section </p>
            </li>

            <li>
              <i class="fas fa-envelope mt-4 fa-2x"></i>
              <p>academic@iittp.ac.in</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Contact;

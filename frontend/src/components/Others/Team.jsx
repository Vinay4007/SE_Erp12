import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Team() {
  return (
    <>
      <br />
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-3">
          <Card border="danger" style={{ width: "16rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Header>Sandeep</Card.Header>
              <Card.Text>
                ROLL NUMBER:CS20B006 B.Tech:Computer Science and Engineering
                Contact Number:9948586963 Gmail:cs20b006@iittp.ac.in
              </Card.Text>
              <Button variant="success">Sandeep</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-3">
          <Card border="danger" style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Header>Vinay</Card.Header>
              <Card.Text>
                ROLL NUMBER:CS20B049 B.Tech:Computer Science and Engineering
                Contact Number:7780391005 Gmail:cs20b049@iittp.ac.in
              </Card.Text>
              <Button variant="success">Vinay</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-3">
          <Card border="danger" style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Header>Deepak</Card.Header>
              <Card.Text>
                ROLL NUMBER:CS20B028 B.Tech:Computer Science and Engineering
                Contact Number:9948586963 Gmail:cs20b028@iittp.ac.in
              </Card.Text>
              <Button variant="success">Deepak</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
      <div class="row center">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <Card border="danger" style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Header>Pavan</Card.Header>
              <Card.Text>
                ROLL NUMBER:CS20B035 B.Tech:Computer Science and Engineering
                Contact Number:6303141184 Gmail:cs20b035@iittp.ac.in
              </Card.Text>
              <a
                href="https://www.linkedin.com/in/s-pavan-kishore-b19383218"
                class="btn btn-success"
              >
                Pavan
              </a>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-4">
          <Card border="danger" style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Header>Ritesh</Card.Header>
              <Card.Text>
                ROLL NUMBER:CS20B033 B.Tech:Computer Science and Engineering
                Contact Number:7780391005 Gmail:cs20b033@iittp.ac.in
              </Card.Text>
              <Button variant="success">Ritesh</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </>
  );
}
export default Team;

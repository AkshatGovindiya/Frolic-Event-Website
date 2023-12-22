import React from "react";

export default function PastEvent() {
  return (
    <div className="container p-5 border-bottom text-center" id="pastEvent">
      <div className="text-center mb-4">
        <h2 className="d-inline fw-bold border rounded p-1 border-5 text-white bg-dark">
          Past Events
        </h2>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="image-container">
            <img
              className="img-fluid rounded"
              src="https://darshan.ac.in/U01/Page/30---16-06-2021-03-59-02.jpeg"
              alt="Event 1"
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="image-container">
            <img
              className="img-fluid rounded"
              src="https://darshan.ac.in/U01/Page/30---18-06-2021-10-19-26.jpeg"
              alt="Event 2"
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="image-container">
            <img
              className="img-fluid rounded"
              src="https://darshan.ac.in/U01/Page/30---16-06-2021-03-58-42.jpeg"
              alt="Event 3"
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="image-container">
            <img
              className="img-fluid rounded"
              src="https://darshan.ac.in/U01/Page/30---16-06-2021-03-58-33.jpeg"
              alt="Event 4"
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="image-container">
            <img
              className="img-fluid rounded"
              src="https://www.darshan.ac.in/U01/Page/30---18-06-2021-10-17-37.jpg"
              alt="Event 5"
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="image-container">
            <img
              className="img-fluid rounded"
              src="https://darshan.ac.in/U01/Page/30---18-06-2021-10-17-55.jpg"
              alt="Event 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

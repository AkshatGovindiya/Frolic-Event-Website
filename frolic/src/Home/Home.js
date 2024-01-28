import { Link, Outlet } from "react-router-dom";


export default function Home(){
    return(
        <>

      <div className="container">
        <div
          className=" rounded mt-4 "
          id="logo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2glMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)",
              backgroundSize:"560px",
          }
        }
        >
          <img
            className="img-fluid"
            src="https://frolic.aswdc.in/img/FrolicTitle2023.png"
            alt="logo"
          />
        </div>
      </div>



      <div className="mt-3 mb-5" id="simple">
      <div className="section text-white text-center ">
        <div className="text-center mt-5 mb-3">
          <h2 className="d-inline fw-bold border p-1 border-5 text-white rounded ">
            Challenging Yourself
          </h2>
        </div>
        <div className="container d-flex justify-content-evenly">
          <div className="row text-center">
            <div className="col p-3">
              <div className="img-fluid p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90PX"
                  height="50PX"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </div>
              <h1 className="fw-bold">1200+</h1>
              <h5 className="fw-semibold">Students</h5>
            </div>
            <div className="col p-3">
              <div className="img-fluid p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90px"
                  height="50px"
                  fill="currentColor"
                  class="bi bi-buildings-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z" />
                </svg>
              </div>
              <h1 className="fw-bold">24+</h1>
              <h5 className="fw-semibold">Events</h5>
            </div>
            <div className="col p-3">
              <div className="img-fluid p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="50"
                  fill="currentColor"
                  class="bi bi-calendar2-event-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                </svg>
              </div>
              <h1 className="fw-bold">Date</h1>
              <h5 className="fw-semibold">30/9/2023 Saturday</h5>
            </div>
            <div className="col p-3">
              <div className="img-fluid p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="50"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <h2 className="fw-bold">Location</h2>
              <h5 className="fw-semibold">Darshan University</h5>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Event Timeline */}
      <div className="container p-2" id="eventtimeline">
        <div className="text-center mt-4 mb-4">
          <h2 className="d-inline fw-bold border rounded p-1 border-5 text-white">
            Event Timeline
          </h2>
        </div>
        <div className="container event-timeline">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="event-item mb-1">
                <h2 className="fw-bold ">7:00 PM</h2>
                <h5 className="fw-semibold" style={{ fontFamily: "cursive" }}>
                  Event Start
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="event-item ">
                <h2 className="fw-bold">9:30 PM</h2>
                <h5 className="fw-semibold" style={{ fontFamily: "cursive" }}>
                  Game/Compitition
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="event-item mb-1">
                <h2 className="fw-bold">10:30 PM</h2>
                <h5 className="fw-semibold" style={{ fontFamily: "cursive" }}>
                  Break
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="event-item mb-1">
                <h2 className="fw-bold">11:30 PM</h2>
                <h5 className="fw-semibold" style={{ fontFamily: "cursive" }}>
                  Event Continue
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="event-item mb-1">
                <h2 className="fw-bold">1:00 PM</h2>
                <h5 className="fw-semibold" style={{ fontFamily: "cursive" }}>
                  Winner's Time
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="event-item mb-1">
                <h2 className="fw-bold">2:00 PM</h2>
                <h5 className="fw-semibold" style={{ fontFamily: "cursive" }}>
                  Event End
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Past Events */}
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
        </>
    )
}
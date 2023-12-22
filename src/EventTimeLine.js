export default function EventTimeLine() {
  return (
    <>
      <div className="container">
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
    </>
  );
}

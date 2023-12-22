export default function Footer() {
  return (
    <>
      <div
        className="container p-1 rounded-pill"
        style={{ backgroundColor: "#63e", boxShadow: "5px 10px 18px red" }}
        id="footer"
      >
        <div className=" d-flex justify-content-center mt-2 pb-2">
          <div className="me-2">
            <h6 className="d-flex text-white fw-">Created By,</h6>
            <h3 className="text-white fw-bold ">Akshat Govindiya</h3>
            <h6 className="text-white">Contact :+91-7990069740</h6>
          </div>
          <div className="">
            <img
              src="https://avatars.githubusercontent.com/u/114801546?v=4"
              className="img-fluid rounded-circle"
              width="100px"
              alt="logo"
              style={{ boxShadow: " 10px 10px 20px #010314" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Logo() {
  return (
    <>
      <div className="container">
        <div
          className=" rounded mt-4 "
          id="logo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2glMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)"
          }}
        >
          <img
            className="img-fluid"
            src="https://frolic.aswdc.in/img/FrolicTitle2023.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
}

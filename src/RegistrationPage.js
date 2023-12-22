import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

export const RegistrationPage = () => {
  const form = useRef();
  const [formValid, setFormValid] = useState(true);

  const validateForm = () => {
    const allFields = form.current.elements;
    let isFormValid = true;

    for (let i = 0; i < allFields.length; i++) {
      const field = allFields[i];
      if (field.type !== "submit" && field.value.trim() === "") {
        isFormValid = false;
        break;
      }
    }

    setFormValid(isFormValid);

    return isFormValid;
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     Swal.fire("Error!", "Please fill in all fields.", "error");

  //     return;
  //   }

  //   emailjs
  //     .sendForm(
  //       "service_is9r7qe",
  //       "template_up29hv9",
  //       form.current,
  //       "A5LyCRxNHP74AEVwM"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         Swal.fire("Good job!", "Register Successfully!", "success");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="container fw-semibold mt-2">
      <div className="text-center mt-4 mb-4">
        <h2 className="d-inline fw-bold border rounded p-1 border-5 text-white ">
          Register Here
        </h2>
      </div>
      <div>
        <h3 className="text-center text-white">
          Kindly Read the Event Rule before Registration
        </h3>
      </div>
      <form ref={form}  id="myform">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
            name="user_name"
          />
          <label for="floatingInputGroup1" className="fw-semibold">
            Enter Full name
          </label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="user_email"
          />
          <label for="floatingInputGroup1">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="tel"
            class="form-control"
            id="floatingInput"
            placeholder="Mobile Number"
            name="phone_number"
            pattern="[0-9]{10}"
            required
          />
          <label for="floatingInputGroup1">Enter Mobile Number</label>
          <div className="invalid-feedback">
            Please enter a 10-digit numeric mobile number.
          </div>
        </div>
        <div>
          <select
            className="form-select mb-3 fw-semibold"
            aria-label="Default select example"
            name="collage_name"
          >
            <option selected>Select your Collage </option>
            <option value="Darshan University">Darshan University</option>
            <option value="VVP Engineering collage">
              VVP Engineering collage
            </option>
            <option value="Marwadi University">Marwadi University</option>
            <option value="Aatmiy University">Aatmiy University</option>
            <option value="RK University">RK University</option>
            <option value="GCET,Rajkot">GEC,Rajkot</option>
          </select>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="City"
            name="city_name"
          />
          <label for="floatingInputGroup1">Enter City </label>
        </div>

        <div className="text-center ">
          <button
            className="btn text-white fw-bold mt-3 mb-3"
            type="submit"
            value="Send"
            id="submitBTN"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Link, unstable_HistoryRouter } from "react-router-dom";

export const RegistrationPage = () => {
  const form = useRef();
  const [formValid, setFormValid] = useState(true);
  
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');

  useEffect(() => {
    fetch('http://localhost:1678/event')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

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

  const sendEmail = (e) => {
    e.preventDefault(); 

    
    if (!validateForm()) {
      Swal.fire("Error!", "Please fill in all fields.", "error");
      return;
    }

    sendConfirmationEmail();

  
    emailjs
      .sendForm(
        "service_is9r7qe",
        "template_up29hv9",
        form.current,
        "A5LyCRxNHP74AEVwM"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Good job!", "Register Successfully!", "success");

          setTimeout(() => {
            window.location.href = "/";  
          }, 3000);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendConfirmationEmail = () => {
    // Customize the endpoint and data based on your server setup
    const apiUrl = 'http://localhost:3001/sendConfirmationEmail';
    const emailData = {
      to: 'user_email@example.com', // Replace with the user's email address
      subject: 'Registration Confirmation',
      text: 'Thank you for registering! Your registration was successful.',
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send confirmation email');
        }
        console.log('Confirmation email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending confirmation email:', error.message);
      });
  };
  
  

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
      <form ref={form} id="myform" onSubmit={sendEmail}>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
            name="user_name"
            required
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
            required
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

        <div className="form-floating mb-3">
      <select
        className="form-control"
        id="floatingInput"
        name="event_name"
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
      >
        <option value="" disabled>Select Event</option>
        {events.map((event) => (
          <option key={event.id} value={event.id} className="">
            {event.Title}
          </option>
        ))}
      </select>
      <label htmlFor="floatingInput">Select Event</label>
    </div>

        <div>
          <select
            className="form-select mb-3 fw-semibold"
            aria-label="Default select example"
            name="collage_name"
            required
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

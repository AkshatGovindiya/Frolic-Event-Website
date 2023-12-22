import React from "react";
import ReactDOM from "react-dom/client";
import { RegistrationPage } from "./RegistrationPage";
import Simple from "./Simple";
import Rules from "./Rules";
import Footer from "./Footer";
import PastEvent from "./PastEvent";
import EventTimeLine from "./EventTimeLine";
import Logo from "./Logo";
// import AfterSubmitPage from "./AfterSubmitPage";
import "./styles.css";
import Event from "./Event";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <div id="main" className="pt-1">
      <div className="container mt-2" id="header">
        <div className="text-center p-1 " id="title">
          <h2 className="text-white fw-bold">★ Frolic Website-2023 ★</h2>
        </div>
      </div>

      <div className="">
        <Logo />
      </div>

      <div id="fadedIn">
        <div className="mt-3 mb-5" id="simple">
          <Simple />
        </div>
      </div>
      <div className="mb-5">
        <EventTimeLine />
      </div>
      <div className="">
        <Event />
      </div>
      <div className="mb-5">
        <PastEvent />
      </div>
      <div className="container">
        <Rules />
      </div>

      <div className="">
        <RegistrationPage />
      </div>

      <div className="pb-3" id="fadedIn">
        <Footer />
      </div>
    </div>
  </>
);

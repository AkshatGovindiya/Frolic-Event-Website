import React from "react";
import ReactDOM from "react-dom/client";
import { RegistrationPage } from "./RegistrationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Rules from "./Rules";
import Event from "./Event";
import Home from "./Home/Home";
import Layout from "./Layout";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
  <div id="main" className="pt-1">

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rules" element={<Rules />} />
          <Route path="registrationpage" element={<RegistrationPage/>} />
          <Route path="event" element={<Event/>} />
        </Route>
      </Routes>
    </BrowserRouter>
 

    </div>
  </>
);

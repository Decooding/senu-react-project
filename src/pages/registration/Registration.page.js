import React from "react";
import { Jumbotron } from "react-bootstrap";

import RegistrationForm from "../../components/registration-form/RegistrationForm.comp";

import "./registration.style.css";

export const Registration = () => {
  return (
    <div className="registration-page">
      <div className="wrap">
        <p className="backMain">
        <a href="/">На Главную</a>
          </p>
        <Jumbotron className="form-box bg-light">
          <RegistrationForm />
        </Jumbotron>
      </div>
    </div>
  );
};

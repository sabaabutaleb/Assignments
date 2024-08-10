import React from "react";
import ReactDOM from "react-dom/client";
import "./signup.css";

function Signup() {
  return (
    <div>
      <h1 class="header">Student registration form</h1>
      <form class="grid">
        <div className="registration-img spacing">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
            alt="signupPic"
            class="img-fluid"
          />
        </div>
        <div className="info-card spacing">
          <div className="row spacing">
            <label class="form-label" for="firstName">
              First name
            </label>
            <input type="text" id="firstNameInput" />
            <label class="form-label" for="LastName">
              Last name
            </label>
            <input type="text" id="LastNameInput" />
          </div>

          <div class="row spacing">
            <label class="form-label" for="email">
              Email ID
            </label>
            <input type="email" id="email" autocomplete="on" />
            <label class="form-label" for="dob">
              DOB
            </label>
            <input type="date" id="dob" />
          </div>
          <div class="row spacing">
            <label class="form-label" for="addressInput">
              Address
            </label>
            <input type="text" id="addressInput" />
            <select data-mdb-select-init>
              <option value="1">State</option>
              <option value="2">Florida</option>
              <option value="3">California</option>
              <option value="4">New York</option>
            </select>
            <select data-mdb-select-init>
              <option value="1">City</option>
              <option value="2">Los Angelos</option>
              <option value="3">San diego</option>
              <option value="4">Orlando</option>
            </select>
          </div>

          <div class="row spacing">
            <div class="row">
              <label>Gender:</label>
            </div>
            <div class="row">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="femaleGender"
                value="option1"
              />
              <label class="form-check-label" for="femaleGender">
                Female
              </label>
            </div>
            <div class="row ">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="maleGender"
                value="option2"
              />
              <label class="form-check-label" for="maleGender">
                Male
              </label>
            </div>
          </div>

          <div className="row spacing">
            <label className="form-label" for="createPassword">
              Password
            </label>
            <input type="text" id="createPassword" />
            <label class="form-label" for="confirmPassword">
              Confirm{" "}
            </label>
            <input type="text" id="confirmPassword" />
          </div>

          <div className="row btn-row spacing">
            <button className="btn reset-btn">Reset all</button>
            <button className="btn submit-btn">Submit form</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Signup;

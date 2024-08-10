import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

// let userName = "eve.holt@reqres.in";
// let password = "123";
let validCredentials = true;
function Login() {
  return (
    <>
      <body className="container">
        <h1 className="collage-title">XXX Collage</h1>
        <form id="login-form card">
          <div className="spacing">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input type="email" id="emailInput" autocomplete="on" />
          </div>
          <div className="spacing">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input type="password" id="passwordInput" />
            <i id="password-icon" className="bi bi-eye-fill"></i>
          </div>

          <div className="spacing">
            <Link
              to={validCredentials ? "/dashBoard" : "/login"}
              id="login-btn"
              type="submit"
              className="btn btn-login"
            >
              Login
            </Link>
          </div>
        </form>
        <Link to="/signup">Don't have an account Sign up</Link>
        <Link to="/forgetPasswordPage">Forget my password</Link>
        <p id="welcom letter"></p>
        <script src="login.js"></script>
      </body>
    </>
  );
}

export default Login;

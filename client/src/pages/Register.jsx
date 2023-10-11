import React from "react";
import "../css/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserSecret, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-fluid register-container">
      <div className="row px-3">
        <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
          <div className="img-left d-none d-md-flex"></div>

          <div className="card-body">
            <h4 className="title text-center mt-4">Register</h4>
            <form className="form-box px-3">
              <div className="form-input">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Full Name"
                  tabIndex="10"
                  required
                />
              </div>
              <div className="form-input">
                <span>
                <FontAwesomeIcon icon={faUserSecret} />
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Username"
                  tabIndex="10"
                  required
                />
              </div>
              <div className="form-input">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  name=""
                  placeholder="Email Address"
                  tabIndex="10"
                  required
                />
              </div>
              <div className="form-input">
                <span>
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <input
                  type="password"
                  name=""
                  placeholder="Password"
                  required
                />
              </div>

              <div className="mb-3">
                <div className="custom-control custom-checkbox ">
                  <input
                    type="checkbox"
                    className="custom-control-input "
                    id="cb1"
                  />
                  <label className="custom-control-label ps-3" htmlFor="cb1">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="mb-3 d-flex">
                <button type="submit" className="btn btn-block text-uppercase">
                  Register
                </button>
              </div>

              <div className="text-right">
                <a href="/" className="forget-link">
                  Forget Password?
                </a>
              </div>

              {/* <div className="text-center my-3 fw-2 fs-5"> OR </div>

              <div className="row mb-3">
                <div className="col-4">
                  <a href="/" className="btn btn-block btn-social btn-facebook">
                    facebook
                  </a>
                </div>

                <div className="col-4">
                  <a href="/" className="btn btn-block btn-social btn-google">
                    google
                  </a>
                </div>

                <div className="col-4">
                  <a href="/" className="btn btn-block btn-social btn-twitter">
                    twitter
                  </a>
                </div>
              </div> */}

              <div className="text-center my-3">
               Already a User!
                <Link to="/login" className="register-link ps-2">
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

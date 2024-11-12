import React from 'react'
import { Link } from 'react-router-dom';
import image from "../assets/Frame.png"
import google from "../assets/googleicon.png"


const Register = () => {
  return (
    <div className="register">
      <header className="py-3">
        <nav className="container">
          <Link className="text-decoration-none" to="/">
            <span className="main-color-bg text-white rounded-circle p-2">
              PZ
            </span>
            <span className="text-white fs-5 fw-bolder ms-2">Perfumerye</span>
          </Link>
        </nav>
      </header>
      <div>
        <form
          style={{ maxWidth: "600px" }}
          className="bg-white mx-auto px-4 py-2 shadow-lg rounded-2"
        >
          <h1>Get Started</h1>
          <p>Let's get started by filling out the information below</p>
          <div className="d-flex flex-column flex-lg-row gap-1 justify-content-between my-3">
            <div>
              <label className="form-label" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="text">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control"
              />
            </div>
          </div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="form-control"
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="form-control"
          />
          <label className="form-label" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your Password"
            className="form-control"
          />
          <div className="my-2">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label ms-2" htmlFor="checkbox">
              I agree to{" "}
              <a href="##">
                <span>Terms of Service</span>
              </a>{" "}
              and
              <a href="##">
                <span> Privacy Policies</span>
              </a>
            </label>
          </div>
          <button
            style={{ backgroundColor: "#8D34FF", height: "64px" }}
            className="text-white mt-2 fs-5 border-0 rounded-2 w-100"
          >
            Register
          </button>
          <img className="my-2 w-100" src={image} alt="" />
          <button style={{ height: "64px" }} className="d-flex flex-row justify-content-center align-items-center border-0 w-100 rounded-2">
            <img src={google} alt="" />
            <p className='ms-1 pt-3 fs-5'>continue with Google</p>
          </button>
          <p className="text-center my-2">
            Already have an account?
            <Link style={{ color: "#8D34FF" }} to="/signin">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register
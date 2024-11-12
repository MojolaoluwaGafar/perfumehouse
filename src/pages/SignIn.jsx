import React from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom';
import image from "../assets/Frame.png";
import google from "../assets/googleicon.png";
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError] = useState("")
  const redirect = useNavigate()
  const handleSubmit = (event)=>{
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError("*Please provide your email and password to sign in*")
    } else{
      redirect("/")
    }
  }

  return (
    <div className="signin">
      <header className="ps-2 py-3">
        <nav className="container">
          <Link className="text-decoration-none" to="/">
            <span className="main-color-bg text-white rounded-circle p-2">
              PZ
            </span>
            <span className="text-white fs-5 fw-bolder ms-2">Perfumerye</span>
          </Link>
        </nav>
      </header>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="bg-white mx-auto p-3 shadow-lg rounded-2"
        >
          <h1>Welcome Back</h1>
          <p>Fill in your information to access your account</p>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control my-2"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control my-2"
            placeholder="Enter your password"
          />
          <p className="text-danger">{error}</p>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <input className="form-check-input" type="checkbox" />
              <label htmlFor="checkbox" className="form-check-label ms-1">
                Remember Me
              </label>
            </div>
            <a className="text-danger" href="##">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            style={{ backgroundColor: "#8D34FF", height: "64px" }}
            className="text-white mt-2 fs-5 border-0 rounded-2 w-100"
          >
            Sign In
          </button>
          <img className="d-flex m-auto my-2 w-100" src={image} alt="" />
          <button
            style={{ height: "64px" }}
            className="d-flex flex-row justify-content-center align-items-center border-0 w-100 rounded-2"
          >
            <img src={google} alt="" />
            <p className="ms-1 pt-3 fs-5">continue with Google</p>
          </button>
          <p className="text-center mt-2">
            Dont have an account?
            <Link style={{ color: "#8D34FF" }} to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn
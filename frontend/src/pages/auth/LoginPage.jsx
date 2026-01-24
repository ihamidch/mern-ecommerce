import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
   const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ SUCCESS → clear form
      toast.success(response?.data?.message ?? "Registration successful", {autoClose: 2000});

      setInput({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      // ❌ ERROR → DO NOT clear form
      toast.error(
        error?.response?.data?.message ?? "User already exists", {autoClose: 2000}
      );
      setInput({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="row justify-content-center w-100">
          <div className="col-lg-5 col-md-7 col-sm-10">
            <div className="auth-card shadow-lg">
              <h2 className="text-center mb-2">Welcome Back</h2>
              <p className="text-center text-muted mb-4">
                Login to continue shopping
              </p>

              <form onSubmit={handleSubmit} >
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                       name="email"
                    value={input.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                      name="password"
                    value={input.password}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-accent w-100 mt-2">
                  Login
                </button>
              </form>

              <div className="text-center mt-4">
                <span className="text-muted">
                  Don’t have an account?
                </span>
                <Link to="/register" className="auth-link ms-1">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

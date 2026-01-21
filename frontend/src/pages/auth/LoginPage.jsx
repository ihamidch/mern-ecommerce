import React from "react";
import "./Auth.css";

const Login = () => {
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

              <form >
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
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
                <a href="/signup" className="auth-link ms-1">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

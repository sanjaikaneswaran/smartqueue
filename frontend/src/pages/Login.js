import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left-panel">
          <button className="auth-back-btn">← Back</button>

          <div className="auth-left-content">
            <h1>Welcome Back!</h1>
            <p>
              Access your SmartQueue account to order delicious meals from your
              favorite campus canteens.
            </p>
          </div>
        </div>

        <div className="auth-right-panel">
          Right side content
        </div>
      </div>
    </div>
  );
}

export default Login;
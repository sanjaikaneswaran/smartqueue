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
          <div className="access-cards">

  <div className="access-card">
    <div className="access-icon">👤</div>

    <div>
      <h3>Student Access</h3>
      <p>Browse menu, place orders and track your meals.</p>
    </div>
  </div>

  <div className="access-card">
    <div className="access-icon">🛡️</div>

    <div>
      <h3>Admin Access</h3>
      <p>Manage menu, orders and daily reports.</p>
    </div>
  </div>

</div>
        </div>

        <div className="auth-right-panel">
          <div className="login-form-box">
            <h2>Sign In</h2>
            <p className = "form-subtitle">Enter your details to continue </p>

            <form>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />

              <label>Password</label>
              <input type="password" placeholder="Enter your password" />

              <button type="submit" className="login-btn">Sign In</button>
            </form>
            
            <p className="register-text">
              Don't have an account? <span>Register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
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
          Right side content
        </div>
      </div>
    </div>
  );
}

export default Login;
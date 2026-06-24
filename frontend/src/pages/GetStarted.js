import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="getstarted-page">
      <div className="left-section">
        <div className="brand-pill">🍴 SmartQueue</div>

        <h1>
          Skip the Queue,
          <br />
          Order Smart
        </h1>

        <p className="description">
          Pre-order your meals from university canteens and skip the long
          waiting lines. Fast, easy, and convenient.
        </p>

        <div className="features">
          <div className="feature-card">
            <span>🕒</span>
            <p>Save Time</p>
          </div>

          <div className="feature-card">
            <span>👥</span>
            <p>Avoid Crowds</p>
          </div>

          <div className="feature-card">
            <span>✅</span>
            <p>Easy Pickup</p>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="welcome-card">
          <div className="logo-circle">🍴</div>

          <h2>Welcome to SmartQueue</h2>
          <p>Your smart solution for campus dining</p>

          <button onClick={() => navigate("/login")} className="get-btn">
            Get Started
          </button>

          <p className="small-text">Available for all university students</p>

          <hr />

          <h4>Available Canteens</h4>

          <div className="canteen-chips">
            <span>Samaja</span>
            <span>Gallery</span>
            <span>G Canteen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
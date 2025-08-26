import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';

function LandingPage() {
  return (
    <> 
        <div className="circle-1">1</div>
     <div className="circle-2">2</div>
           <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
        <Link to="/singup" className="btn create-account-btn">
          Create Account
        </Link>
        <Link to="/login" className="btn login-btn">
          Already Registered? Login
        </Link>
      </div>
    </div>
    </>

  );
}

export default LandingPage;
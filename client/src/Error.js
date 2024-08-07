import React from 'react';
import './ErrorCSS.css';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1 className="error-code">404</h1>
        <p className="error-text">Oops! Page not found.</p>
        <p className="error-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className="error-action">
          Please <Link className="nav-link" to="/home">Go to Home</Link>.
        </p>
      </div>
    </div>
  );
};

export default Error;

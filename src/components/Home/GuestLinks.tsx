import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const GuestLinks = () => {
  return (
    <div className="homepage">
      <div className="home-overlay">
        <div className="container homepage-inner">
          <div className="home-content">
            <h1>React Typescript Template</h1>
            <p>Please login with account & password below.</p>
            <p className="home-text-light">
              Account:
              <span> admin</span>
            </p>
            <p className="home-text-light">
              Password: <span> 123456</span>
            </p>
            <div className="home-button-wrap">
              <Button type="primary" size="large">
                <Link to="/login" className="button-login-link">
                  Go To Login Page
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

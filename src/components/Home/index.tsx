import React from 'react';
import { Button } from 'antd';

export const Home = () => {
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
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

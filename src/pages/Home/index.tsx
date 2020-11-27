import React from 'react';
import { Button } from 'antd';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="container-fluid">
          <h3>Demo website for my React-Typescript Template</h3>
          <p>
            Please login with account adn password below to see other pages.
          </p>
          <p>Account: admin</p>
          <p>Password: 123456</p>
          <div className="home-button-wrap">
            <Button type="primary" size="large">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

import { ExclamationOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const NotFound = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="static-pages-section">
      <div className="container">
        <div className="block-title">
          <h2>
            <ExclamationOutlined />
            Page Not Found
          </h2>
          <p className="large">Sorry, this page does not exist</p>
          <Button type="primary" onClick={goBack}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

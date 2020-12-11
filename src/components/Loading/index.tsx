import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Loading = () => {
  return (
    <div className="container">
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Spin indicator={antIcon} />
      </div>
    </div>
  );
};

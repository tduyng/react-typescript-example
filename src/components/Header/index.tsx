import React, { useState } from 'react';
import { LeftMenu } from './LeftMenu';
import { RightMenu } from './RightMenu';
import { Drawer, Button } from 'antd';

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const drawerOnClose = () => {
    setVisible(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">REACT TEMPLATE</a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-left-menu">
          <LeftMenu />
        </div>
        <div className="navbar-right-menu">
          <RightMenu />
        </div>
        <Button
          className="navbar-bars-icon"
          type="primary"
          onClick={showDrawer}
        >
          <span className="navbar-bars-button"></span>
        </Button>
        <Drawer
          title="Drawer navbar"
          placement="right"
          closable={false}
          onClose={drawerOnClose}
          visible={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

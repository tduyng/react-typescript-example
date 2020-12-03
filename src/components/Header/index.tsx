import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
    <div className="container">
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-item" activeClassName="is-active">
            REACT TS
          </NavLink>
        </div>
        <div className="navbar-menu">
          <div className="navbar-left-menu">
            <LeftMenu />
          </div>
          <div className="navbar-right-menu">
            <RightMenu />
          </div>
        </div>
        <div>
          <Button
            className="navbar-btnBars"
            type="primary"
            onClick={showDrawer}
          >
            <span className="navbar-btnBars-span"></span>
          </Button>
          <Drawer
            title="Drawer navbar"
            placement="right"
            closable={true}
            onClose={drawerOnClose}
            visible={visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

import React from 'react';
import { Menu, Grid } from 'antd';
import { NavLink } from 'react-router-dom';

const { useBreakpoint } = Grid;

export const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="menukey-login">
        <NavLink className="navbar-item primary" to="/login">
          Sign In
        </NavLink>
      </Menu.Item>
      <Menu.Item key="menukey-signup">
        <NavLink className="navbar-item" to="/signup">
          Register
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

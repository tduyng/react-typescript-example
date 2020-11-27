import React from 'react';
import { Menu, Grid } from 'antd';

const { SubMenu, ItemGroup: MenuItemGroup } = Menu;
const { useBreakpoint } = Grid;

export const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="menukey-login">
        <a href="/login">SignIn</a>
      </Menu.Item>
      <Menu.Item key="menukey-signup">
        <a href="/signup">SignUp</a>
      </Menu.Item>
    </Menu>
  );
};

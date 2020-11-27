import React from 'react';
import { Menu, Grid } from 'antd';

const { SubMenu, ItemGroup: MenuItemGroup } = Menu;
const { useBreakpoint } = Grid;

export const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="key-home">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu key="sub1" title="Blogs">
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="key-contact">
        <a href="!#">Contact</a>
      </Menu.Item>
    </Menu>
  );
};

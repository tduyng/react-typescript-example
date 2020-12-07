import React from 'react';
import { Menu, Grid } from 'antd';
import { NavLink } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import { logout } from 'src/components/Auth/Auth.thunks';
import { connect, ConnectedProps } from 'react-redux';
import { PATH } from 'src/constants/paths';

const { useBreakpoint } = Grid;

const mapStateToProps = (state: AppState) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {
  logout,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _RightMenu = (props: Props) => {
  const { loading, isAuthenticated, logout } = props;
  const { md } = useBreakpoint();
  const guestLinks = (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="menukey-login">
        <NavLink className="navbar-item primary" to={PATH.LOGIN}>
          Sign In
        </NavLink>
      </Menu.Item>
      <Menu.Item key="menukey-signup">
        <NavLink className="navbar-item" to={PATH.REGISTER}>
          Register
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  const authLinks = (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="menukey-login">
        <NavLink
          className="navbar-item primary"
          to={PATH.HOME}
          onClick={logout}
        >
          <span>
            <LoginOutlined /> Log Out
          </span>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  return <div>{!loading && isAuthenticated ? authLinks : guestLinks}</div>;
};

const RightMenu = connector(_RightMenu);
export { RightMenu };

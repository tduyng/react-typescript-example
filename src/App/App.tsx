import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadUser, logout } from 'src/containers/Auth/Auth.thunks';
import { Routes } from 'src/routes';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  loadUser,
  logout,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _App = (props: Props) => {
  useEffect(() => {
    const { loadUser, logout } = props;
    // check for token in LS
    if (localStorage.user) {
      loadUser();
    }

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.user) logout();
    });
  }, []);
  return <Routes />;
};

export const App = connector(_App);

import React from 'react';
import { Login } from 'src/containers/Auth/Login';
import { MainLayout } from 'src/layouts/MainLayout';

const _LoginPage = () => {
  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

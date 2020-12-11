import React from 'react';
import { Login } from 'src/components/Auth/Login';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _LoginPage = () => {
  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

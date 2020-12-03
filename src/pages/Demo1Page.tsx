import React from 'react';
import { DemoOption1 } from 'src/components/StaticPages/Demo.option.1';
import { MainLayout } from 'src/layouts/MainLayout';

const _LoginPage = () => {
  return (
    <MainLayout>
      <DemoOption1 />
    </MainLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

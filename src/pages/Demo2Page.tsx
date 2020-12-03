import React from 'react';
import { DemoOption2 } from 'src/components/StaticPages/Demo.option.2';
import { MainLayout } from 'src/layouts/MainLayout';

const _LoginPage = () => {
  return (
    <MainLayout>
      <DemoOption2 />
    </MainLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

import React from 'react';
import { Contact } from 'src/components/StaticPages/Contact';
import { MainLayout } from 'src/layouts/MainLayout';

const _LoginPage = () => {
  return (
    <MainLayout>
      <Contact />
    </MainLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

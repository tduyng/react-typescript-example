import React from 'react';
import { Register } from 'src/components/Auth/Register';
import { MainLayout } from 'src/layouts/MainLayout';

const _RegisterPage = () => {
  return (
    <MainLayout>
      <Register />
    </MainLayout>
  );
};

const RegisterPage = React.memo(_RegisterPage);
export default RegisterPage;

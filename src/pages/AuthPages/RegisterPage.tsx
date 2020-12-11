import React from 'react';
import { Register } from 'src/components/Auth/Register';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _RegisterPage = () => {
  return (
    <PageLayout>
      <Register />
    </PageLayout>
  );
};

const RegisterPage = React.memo(_RegisterPage);
export default RegisterPage;

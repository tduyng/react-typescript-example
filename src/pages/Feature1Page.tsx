import React from 'react';
import { FeatureOption1 } from 'src/components/StaticPages/Feature.option.1';
import { MainLayout } from 'src/layouts/MainLayout';

const _LoginPage = () => {
  return (
    <MainLayout>
      <FeatureOption1 />
    </MainLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

import React from 'react';
import { FeatureOption2 } from 'src/components/StaticPages/Feature.option.2';
import { MainLayout } from 'src/layouts/MainLayout';

const _LoginPage = () => {
  return (
    <MainLayout>
      <FeatureOption2 />
    </MainLayout>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

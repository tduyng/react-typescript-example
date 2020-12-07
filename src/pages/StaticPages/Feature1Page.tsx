import React from 'react';
import { FeatureOption1 } from 'src/components/StaticPages/Feature.option.1';
import { MainLayout } from 'src/layouts/MainLayout';

const _Feature1 = () => {
  return (
    <MainLayout>
      <FeatureOption1 />
    </MainLayout>
  );
};

const Feature1Page = React.memo(_Feature1);
export default Feature1Page;

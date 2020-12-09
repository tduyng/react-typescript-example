import React from 'react';
import { FeatureOption2 } from 'src/components/StaticPages/Feature.option.2';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _Feature2 = () => {
  return (
    <MainLayout>
      <FeatureOption2 />
    </MainLayout>
  );
};

const Feature2Page = React.memo(_Feature2);
export default Feature2Page;

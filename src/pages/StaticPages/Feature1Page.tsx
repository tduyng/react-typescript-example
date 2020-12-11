import React from 'react';
import { FeatureOption1 } from 'src/components/StaticPages/Feature.option.1';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _Feature1 = () => {
  return (
    <PageLayout>
      <FeatureOption1 />
    </PageLayout>
  );
};

const Feature1Page = React.memo(_Feature1);
export default Feature1Page;

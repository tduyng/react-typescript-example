import React from 'react';
import { FeatureOption2 } from 'src/components/StaticPages/Feature.option.2';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _Feature2 = () => {
  return (
    <PageLayout>
      <FeatureOption2 />
    </PageLayout>
  );
};

const Feature2Page = React.memo(_Feature2);
export default Feature2Page;

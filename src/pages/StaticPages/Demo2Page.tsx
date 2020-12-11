import React from 'react';
import { DemoOption2 } from 'src/components/StaticPages/Demo.option.2';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _Demo2 = () => {
  return (
    <PageLayout>
      <DemoOption2 />
    </PageLayout>
  );
};

const Demo2 = React.memo(_Demo2);
export default Demo2;

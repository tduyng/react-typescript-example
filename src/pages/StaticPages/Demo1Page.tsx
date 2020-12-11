import React from 'react';
import { DemoOption1 } from 'src/components/StaticPages/Demo.option.1';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _Demo1 = () => {
  return (
    <PageLayout>
      <DemoOption1 />
    </PageLayout>
  );
};

const Demo1 = React.memo(_Demo1);
export default Demo1;

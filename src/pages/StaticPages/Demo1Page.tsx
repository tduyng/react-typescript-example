import React from 'react';
import { DemoOption1 } from 'src/components/StaticPages/Demo.option.1';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _Demo1 = () => {
  return (
    <MainLayout>
      <DemoOption1 />
    </MainLayout>
  );
};

const Demo1 = React.memo(_Demo1);
export default Demo1;

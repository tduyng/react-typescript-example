import React from 'react';
import { DemoOption2 } from 'src/components/StaticPages/Demo.option.2';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _Demo2 = () => {
  return (
    <MainLayout>
      <DemoOption2 />
    </MainLayout>
  );
};

const Demo2 = React.memo(_Demo2);
export default Demo2;

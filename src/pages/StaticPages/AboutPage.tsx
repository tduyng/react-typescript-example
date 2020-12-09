import React from 'react';
import { About } from 'src/components/StaticPages/About';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _AboutPage = () => {
  return (
    <MainLayout>
      <About />
    </MainLayout>
  );
};

const AboutPage = React.memo(_AboutPage);
export default AboutPage;

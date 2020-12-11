import React from 'react';
import { About } from 'src/components/StaticPages/About';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _AboutPage = () => {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
};

const AboutPage = React.memo(_AboutPage);
export default AboutPage;

import React from 'react';
import { Home } from 'src/components/Home';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _HomePage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};
const HomePage = React.memo(_HomePage);
export default HomePage;

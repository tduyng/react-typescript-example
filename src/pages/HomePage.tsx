import React from 'react';
import { Home } from 'src/components/Home';
import { MainLayout } from 'src/layouts/MainLayout';

const _HomePage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};
const HomePage = React.memo(_HomePage);
export default HomePage;

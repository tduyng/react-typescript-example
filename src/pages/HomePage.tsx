import React from 'react';
import { Home } from 'src/components/Home';

const _HomePage = () => {
  return <Home />;
};
const HomePage = React.memo(_HomePage);
export default HomePage;

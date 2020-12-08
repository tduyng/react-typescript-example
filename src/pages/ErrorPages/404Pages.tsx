import React from 'react';
import { NotFound } from 'src/components/Error/404';
import { MainLayout } from 'src/layouts/MainLayout';

const _NotFoundPage = () => {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  );
};
const NotFoundPage = React.memo(_NotFoundPage);
export default NotFoundPage;

import React from 'react';
import { NotFound } from 'src/components/Error/404';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _NotFoundPage = () => {
  return (
    <PageLayout>
      <NotFound />
    </PageLayout>
  );
};
const NotFoundPage = React.memo(_NotFoundPage);
export { NotFoundPage };
export default NotFoundPage;

import React from 'react';
import { ProductList } from 'src/components/Products/ProductList';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _ProductListPage = () => {
  return (
    <PageLayout>
      <ProductList />
    </PageLayout>
  );
};
const ProductListPage = React.memo(_ProductListPage);
export default ProductListPage;

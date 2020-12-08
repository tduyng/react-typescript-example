import React from 'react';
import { ProductList } from 'src/components/Products/ProductList';
import { MainLayout } from 'src/layouts/MainLayout';

const _ProductListPage = () => {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
};
const ProductListPage = React.memo(_ProductListPage);
export default ProductListPage;

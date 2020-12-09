import React from 'react';
import { ProductItem } from 'src/components/Products/ProductItem';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _ProductItemPage = () => {
  return (
    <MainLayout>
      <ProductItem />
    </MainLayout>
  );
};
const ProductItemPage = React.memo(_ProductItemPage);
export default ProductItemPage;

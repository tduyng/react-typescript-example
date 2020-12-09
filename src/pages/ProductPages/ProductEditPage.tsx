import React from 'react';
import { ProductForm } from 'src/components/Products/ProductForm';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _ProductNewPage = () => {
  return (
    <MainLayout>
      <ProductForm edit={true} />
    </MainLayout>
  );
};
const ProductNewPage = React.memo(_ProductNewPage);
export default ProductNewPage;

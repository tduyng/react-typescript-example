import React from 'react';
import { ProductForm } from 'src/components/Products/ProductForm';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _ProductNewPage = () => {
  return (
    <PageLayout>
      <ProductForm edit={true} />
    </PageLayout>
  );
};
const ProductNewPage = React.memo(_ProductNewPage);
export default ProductNewPage;

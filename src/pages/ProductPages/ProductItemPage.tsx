import React from 'react';
import { ProductItem } from 'src/components/Products/ProductItem';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _ProductItemPage = () => {
  return (
    <PageLayout>
      <ProductItem />
    </PageLayout>
  );
};
const ProductItemPage = React.memo(_ProductItemPage);
export default ProductItemPage;

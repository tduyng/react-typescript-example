import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getProduct } from './Product.thunks';
import { useParams } from 'react-router-dom';
import { Row, Col, Image } from 'antd';

const mapStateToProps = (state: AppState) => ({
  product: state.products.product,
});
const mapDispatchToProps = {
  getProduct,
};
interface Params {
  id: string;
}
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

export const _ProductItem = (props: Props) => {
  const { product, getProduct } = props;
  const params: Params = useParams();
  useEffect(() => {
    const { id } = params;
    getProduct(id);
  }, [params, getProduct]);
  return (
    <div className="container">
      <Row>
        <Col span={12}>
          <Image src={product.image_url} />
        </Col>
        <Col span={8} offset={4}>
          <h2>Name: {product.name}</h2>
          <p>Brand: {product.brand}</p>
        </Col>
      </Row>
    </div>
  );
};
export const ProductItem = connector(_ProductItem);

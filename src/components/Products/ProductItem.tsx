import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getProduct } from './Product.thunks';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, Button } from 'antd';
import { NotFound } from 'src/components/Error/404';
import { useHistory } from 'react-router-dom';
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

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
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  let productComponent = (item: Product) => {
    if (item) {
      return (
        <div className="product-item-section mt-2">
          <div className="container">
            <Row>
              <Col span={12}>
                <Image src={item.image_url} />
              </Col>
              <Col span={12}>
                <p>
                  Name:{' '}
                  <strong style={{ fontSize: '1.4rem' }}> {item.name}</strong>
                </p>
                <p>
                  Brand: <strong>{item.brand}</strong>
                </p>
              </Col>
            </Row>
            <Row className="mt-2" gutter={[16, 16]}>
              <Col span={6} offset={12}>
                <Button onClick={goBack}>
                  <ArrowLeftOutlined /> Go Back
                </Button>
              </Col>
              <Col span={6} offset={0}>
                <Button type="primary">
                  <EditOutlined /> Edit
                </Button>{' '}
                <Button danger>
                  <DeleteOutlined /> Delete
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      );
    } else {
      return <NotFound />;
    }
  };

  const params: Params = useParams();
  useEffect(() => {
    const { id } = params;
    getProduct(id);
  }, [params, getProduct]);

  return productComponent(product);
};
export const ProductItem = connector(_ProductItem);

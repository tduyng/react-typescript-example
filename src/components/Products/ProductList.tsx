import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Table, Image } from 'antd';
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { getProducts, clearProduct } from './Product.thunks';

const mapStateToProps = (state: AppState) => ({
  loading: state.products.loading,
  products: state.products.products,
});

const mapDispatchToProps = {
  getProducts,
  clearProduct,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

export const _ProductList = (props: Props) => {
  const history = useHistory();

  const { products, getProducts, clearProduct } = props;

  const columns: any = [
    {
      title: 'Preview',
      dataIndex: 'image_url',
      render: (image_url, row) => renderImgProduct(image_url, row),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => {
        return a.name.localeCompare(b.name);
      },
      sortDirections: ['descend', 'ascend'],
      render: (name, row) => showProduct(name, row),
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      sorter: (a, b) => {
        return a.brand.localeCompare(b.brand);
      },
      defaultSortOrder: 'descend',
    },
  ];
  const showProduct = (name, row) => {
    return (
      <Link
        to={`${PATH.PRODUCTS}/${row.id}`}
        style={{ textTransform: 'uppercase' }}
      >
        {name}
      </Link>
    );
  };
  const renderImgProduct = (image_url, row) => {
    if (row.id) {
      return (
        <Link to={`${PATH.PRODUCTS}/${row.id}`}>
          <Image src={image_url} alt="Image_sp" style={{ maxWidth: '100px' }} />
        </Link>
      );
    }
  };

  const addNewProduct = () => {
    clearProduct();
    history.push(PATH.PRODUCT_NEW);
  };

  let data = [{}];
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  products.map((product: Product, index: number) => {
    if (index === 0) {
      data = [
        {
          key: index,
          id: product.id,
          name: product.name,
          brand: product.brand,
          image_url: product.image_url,
        },
      ];
    } else {
      data.push({
        key: index,
        id: product.id,
        name: product.name,
        brand: product.brand,
        image_url: product.image_url,
      });
    }
  });

  return (
    <div className="main-body-section">
      <div className="container">
        <div className="block-title">
          <h2>All Smartphones available</h2>
        </div>
        <div className="product-list">
          <Row gutter={[40, 0]} className="mb-1">
            <Col>
              <Button type="primary" onClick={addNewProduct}>
                <PlusOutlined />
                New product
              </Button>
            </Col>
          </Row>

          <Row gutter={[40, 0]}>
            <Col span={24}>
              <Table columns={columns} dataSource={data} rowKey="id" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export const ProductList = connector(_ProductList);

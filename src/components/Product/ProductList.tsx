import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Table, Image } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PATH } from 'src/constants/paths';

export const ProductList = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  const columns = [
    {
      title: 'Preview',
      dataIndex: 'image_url',
      render: (image_url, row) => renderImgProduct(row.id, image_url),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (name, row) => showProduct(row.id, name),
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
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
    return (
      <Link to={`${PATH.PRODUCTS}/${row.id}`}>
        <Image src={image_url} alt="Image_sp" />
      </Link>
    );
  };

  const data = [{}];
  const addNewProduct = () => {
    history.push(PATH.PRODUCT_NEW);
  };

  return (
    <div className="static-pages-section">
      <div className="container">
        <div className="block-title">
          <h2>All Smartphones available</h2>
        </div>
        <div className="product-list">
          <Row gutter={[40, 0]} className="mb-1">
            <Col span={6} offset={18}>
              <Button type="primary" onClick={addNewProduct} block>
                <PlusOutlined />
                Add new product
              </Button>
            </Col>
          </Row>
          <Row gutter={[40, 0]}>
            <Col span={24}>
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

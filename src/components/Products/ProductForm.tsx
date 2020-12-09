import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';
import { PhoneBrand } from 'src/constants/products';
import { useHistory, useParams } from 'react-router-dom';

import { createProduct, editProduct, updateProduct } from './Product.thunks';
import { PATH } from 'src/constants/paths';
const { Option } = Select;

const mapStateToProps = (state: AppState) => ({
  products: state.products.products,
  product: state.products.product,
});
const mapDispatchToProps = { createProduct, editProduct, updateProduct };
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {
  edit: boolean;
}
export const _ProductForm = (props: Props) => {
  const { createProduct, edit, product, updateProduct, editProduct } = props;
  const history = useHistory();
  const params: ProductUrlParams = useParams();
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = values => {
    if (!edit) {
      createProduct(values);
    }

    history.push(PATH.HOME);
  };

  const allBrands = Object.values(PhoneBrand).filter(
    x => typeof x !== 'number',
  );
  const initialValues = { ...product };

  useEffect(() => {
    if (edit) {
      const { id } = params;
      editProduct(id);
    }
  }, [edit, editProduct, params]);

  return (
    <div className="main-body-section">
      <div id="main-contact" className="block">
        <div className="container">
          <div className="block-title">
            <h2>{edit ? 'Create product' : 'Update product'}</h2>
          </div>
          <Form
            {...layout}
            name="product_form"
            className="product-form"
            initialValues={{ ...initialValues, remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter name product!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[
                {
                  required: true,
                  message: 'Please select a brand',
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a brand"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {allBrands.map(brand => {
                  return <Option value={brand}>{brand}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item label="Image Url" name="image_url">
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export const ProductForm = connector(_ProductForm);

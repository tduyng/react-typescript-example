import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { PhoneBrand } from 'src/constants/products';
import { is } from 'immer/dist/internal';
const { Option } = Select;

export const ProductForm = () => {
  const onSelectChange = value => {
    //eslint-disable-next-line
    console.log(`selected ${value}`);
  };
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = values => {
    console.log(values);
  };

  const allBrands = Object.values(PhoneBrand).filter(
    x => typeof x !== 'number',
  );

  return (
    <div className="main-body-section">
      <div id="main-contact" className="block">
        <div className="container">
          <div className="block-title">
            <h2>Create product</h2>
          </div>
          <Form
            {...layout}
            name="product_form"
            className="product-form"
            initialValues={{ remember: true }}
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
                onChange={onSelectChange}
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

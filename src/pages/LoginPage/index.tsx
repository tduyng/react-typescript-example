import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import React from 'react';

const _LoginPage = () => {
  const onFinish = values => {
    console.log('submit');
  };
  return (
    <Fragment>
      <div className="login-form-wrap">
        <h1 className="login-form-title">
          <img
            alt=" logo "
            src=" https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg "
          />
          LOGIN
        </h1>
        <Form
          name="login_form"
          className="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            ></Input>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter password',
              },
            ]}
          >
            <Input
              prefix={LockOutlined}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="/signup">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
};

const LoginPage = React.memo(_LoginPage);
export default LoginPage;

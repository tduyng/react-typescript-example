import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { register } from './Auth.thunks';
import { PATH } from 'src/constants/paths';

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {
  register,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _Register = (props: Props) => {
  // eslint-disable-next-line
  const [error, setError] = useState('');
  const { register, isAuthenticated } = props;
  const history = useHistory();

  const onFinish = async formData => {
    try {
      await register(formData);
    } catch (error) {
      setError(error.payload.message);
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (isAuthenticated) {
    return <Redirect to={PATH.HOME} />;
  }
  return (
    <div className="container">
      <div className="login-form-wrap">
        <h1 className="login-form-title">
          <img
            alt=" logo "
            src=" https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg "
          />
          SIGNUP
        </h1>
        <Form
          name="login_form"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              type="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign Up
            </Button>
            <div className="login-form-register-link-wrapper">
              Or{' '}
              <Link to={PATH.LOGIN} className="login-form-register-link">
                Log in now!
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
const Register = connector(_Register);
export { Register };

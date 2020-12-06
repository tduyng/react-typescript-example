import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { login } from './Register/Register.thunks';
import { PATH } from 'src/constants/paths';

const mapStateToProps = state => ({
  loading: state.loading,
  isAuthenticated: state.isAuthenticated,
});
const mapDispatchToProps = {
  login,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _Register = (props: Props) => {
  // const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login, loading } = props;
  const history = useHistory();

  const onFinish = async formData => {
    const { username, password } = formData;
    if (!loading) {
      const payload = { username, password };
      try {
        const res = await login(payload);
        history.push(PATH.HOME);
        console.log('Success', res);
      } catch (error) {
        setError(error.payload.message);
        console.log('Error', error.message);
      }
    }
  };
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
              <Link to="/login" className="login-form-register-link">
                LogIn now!
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

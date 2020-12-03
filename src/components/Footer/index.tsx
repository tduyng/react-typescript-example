import React from 'react';
import { Link } from 'react-router-dom';
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UpCircleOutlined,
} from '@ant-design/icons';
import { BackTop } from 'antd';

export const AppFooter = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <a href="/">REACT TS</a>
          </div>
          <ul className="footer-socials">
            <li>
              <Link to="https://github.com/tienduy-nguyen">
                <GithubOutlined />
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com/tienduy_nguyen">
                <TwitterOutlined />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/">
                <LinkedinOutlined />
              </Link>
            </li>
          </ul>
          <div className="copyright">Copyright &copy; 2020 REACT TS</div>
          <BackTop>
            <div className="go-top">
              <UpCircleOutlined />
            </div>
          </BackTop>
        </div>
      </div>
    </div>
  );
};

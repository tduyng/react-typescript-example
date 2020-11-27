import React from 'react';
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
              <a href="https://github.com/tienduynguyen">
                <GithubOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <TwitterOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <LinkedinOutlined />
              </a>
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

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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/tienduy-nguyen"
              >
                <GithubOutlined />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com/tienduy_nguyen"
              >
                <TwitterOutlined />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/"
              >
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

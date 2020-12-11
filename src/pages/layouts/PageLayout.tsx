import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import { AppAlert } from 'src/components/Alert';
const { Content } = Layout;

interface Props {
  children: ReactNode;
}
export const PageLayout = (props: Props) => {
  const { children } = props;
  return (
    <Layout className="page-layout">
      <Content className="layout-children">
        <AppAlert />
        {children}
      </Content>
    </Layout>
  );
};

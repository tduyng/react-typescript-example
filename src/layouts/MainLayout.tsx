import React, { ReactNode } from 'react';
import { AppHeader } from 'src/components/Header';
import { AppFooter } from 'src/components/Footer';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

interface Props {
  children: ReactNode;
}
export const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <Layout className="main-layout">
      <Header>
        <AppHeader />
      </Header>
      <Content className="layout-children">{children}</Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

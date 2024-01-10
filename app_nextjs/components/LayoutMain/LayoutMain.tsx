'use client';

import { Layout, theme } from 'antd';
import { useState } from 'react';
import HeaderLayout from '../Header/Header';
import SiderLayout from '../Sider/Sider';
const { Content } = Layout;

export default function LayoutMain({ children }: any) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height:"100vh"}}>
      <SiderLayout collapsed={collapsed} />
      <Layout>
        <HeaderLayout setCollapsed={setCollapsed} collapsed={collapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="!text-black">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

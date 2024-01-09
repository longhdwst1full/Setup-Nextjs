"use client";
import HeaderLayout from "@/common/Header";
import SiderLayout from "@/common/Sider/SiderLayout";
import { Layout, theme } from "antd";
import { useState } from "react";
const { Content } = Layout;

export default function LayoutMain({ children }: any) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <SiderLayout collapsed={collapsed} />
      <Layout>
        <HeaderLayout setCollapsed={setCollapsed} collapsed={collapsed} />
        <Content
          style={{
            margin: "24px 16px",
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

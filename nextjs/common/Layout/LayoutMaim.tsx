import HeaderLayout from "@/common/Header";
import SiderLayout from "@/common/Sider/SiderLayout";
import { Layout, theme } from "antd";
import { Inter } from "next/font/google";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export default function LayoutMaim({children}:any) {
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
           {children}
        </Content>
      </Layout>
    </Layout>
  )
}

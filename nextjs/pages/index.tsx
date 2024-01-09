import LayoutMaim from "@/common/Layout/LayoutMaim";
import { Layout } from "antd";
import { Inter } from "next/font/google";

const { Header, Sider, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
   <LayoutMaim>
    <div>home</div>
    <h3>dfdf</h3>
   </LayoutMaim>
  );
}

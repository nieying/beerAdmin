import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import HeadBar from "components/HeadBar.jsx";
import LeftBar from "components/LeftBar.jsx";
import BreadCrumb from "components/BreadCrumb.jsx";
import Routes from "routes/index";

const { Content } = Layout;

@withRouter
class MainContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        {/* 头部 */}
        <HeadBar />
        <Layout>
          {/* 左侧导航栏 */}
          <LeftBar />
          {/* 右侧主页面 */}
          <Layout style={{ padding: "0 15px 15px", overflow: "hidden" }}>
            {/* 面包屑 */}
            {/* <BreadCrumb /> */}
            {/* 路由 */}
            <Content
              style={{
                background: "#fff",
                padding: 24,
                marginTop: 24,
                minHeight: 280
              }}
            >
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default MainContent;

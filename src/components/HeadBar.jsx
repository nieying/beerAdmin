import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Icon, Modal } from "antd";
import screenfull from "screenfull";

import headPng from "images/head.png";
const { Header } = Layout;

@withRouter
class Head extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      icon: "arrows-alt",
      collapsed: false
    };
  }
  componentDidMount() {
    screenfull.onchange(() => {
      this.setState({
        icon: screenfull.isFullscreen ? "shrink" : "arrows-alt"
      });
    });
  }
  componentWillUnmount() {
    screenfull.off("change");
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  screenfullToggle = () => {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  };
  quit = () => {
    Modal.confirm({
      // title: 'warning',
      content: "确定退出系统吗？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        this.props.history.push("/login");
      },
      onCancel: () => {
        //todo
      }
    });
  };
  render() {
    const { icon } = this.state;
    return (
      <Header className="header">
        <div className="logo" />
        <h4>啤酒杯年会版后台</h4>
        <ul>
          <li>
            <Icon type={icon} onClick={this.screenfullToggle} />
          </li>
          <li className="user-info">
            <img src={headPng} alt="" />
            张三
          </li>
          <li onClick={this.quit}>退出</li>
        </ul>
      </Header>
    );
  }
}

export default Head;

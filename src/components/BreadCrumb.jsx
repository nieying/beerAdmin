import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import { menuJson } from "../json/menu";

class BreadCrumb extends Component {
  state = {
    
  };
  componentDidMount() {}

  handleClick = e => {
   
  };
  render() {
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadCrumb;

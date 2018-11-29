import React, { Component } from "react";
import { Row, Col, Input, message } from "antd";
import { observer, inject } from "mobx-react";
import { optionTip } from "utils/constant";
import ContentHead from "components/ContentHead";
import SignTable from "./SignTable";
import SetSignTime from "./SetSignTime";

@inject("signStore")
@observer
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
      signStatus: 0,
      btns: [
        // { name: "设置签到起始时间", type: "primary", onClick: this.showModal },
        { name: "清空签到", type: "primary", onClick: this.clearSign },
        { name: "", type: "primary", onClick: this.toggleSign },
        { name: "导出", type: "primary", onClick: this.exportSign }
      ]
    };
  }
  componentWillMount() {
    this.getData();
  }

  getData = e => {
    this.props.signStore.getSignList({
      nameOrEmployeeNo: e ? e.target.value : ""
    });
  };

  componentDidMount() {
    this.fetchSignStatus()
  }
  fetchSignStatus = () => {
    const { getSignStatus } = this.props.signStore;
    const that = this;
    getSignStatus().then(d => {
      const { btns } = this.state;
      btns[1].name = d.data.signStatus ? "关闭签到" : "打开签到";
      that.setState({ signStatus: d.data.signStatus, btns });
    });
  };

  // 清空签到信息
  clearSign = () => {
    //todo
  };
  // 关闭，打开签到
  toggleSign = () => {
    const { signStatus } = this.state;
    this.props.signStore
      .updateSignStatus({
        signStatus: signStatus === 1 ? 0 : 1
      })
      .then(data => {
        optionTip(
          data.code,
          signStatus ? "关闭签到成功！" : "打开签到成功",
          message,
          this.fetchSignStatus
        );
      });
    //todo
  };
  // 导出签到
  exportSign = () => {
    //todo
  };

  render() {
    const { signObj } = this.props.signStore;
    const { btns, visable } = this.state;
    return (
      <div className="network-page">
        <ContentHead title="已签到用户" btns={btns} />
        <Row>
          <Col span={8}>
            <Input
              onPressEnter={this.getData}
              placeholder="工号或姓名，按enter查询"
            />
          </Col>
        </Row>
        <SignTable signObj={signObj} />
      </div>
    );
  }
}

export default SignIn;

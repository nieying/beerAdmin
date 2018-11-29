import React, { Component } from "react";
import { Row, Col, Card, Icon, Spin, message, Modal } from "antd";
import { observer, inject } from "mobx-react";
import { optionTip } from "utils/constant";
import ContentHead from "components/ContentHead";
import AccountModal from "./AccountModal";

@inject("networkStore")
@observer
class NetWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visable: false,
      spinning: false,
      pageHeight: window.innerHeight - 160,
      btns: [{ name: "新增账号", type: "primary", onClick: this.addNewShow }]
    };
  }

  componentWillMount() {
    // 获取数据
    this.props.networkStore.getNetworkObj();
  }

  // 显示新增账号弹出框
  addNewShow = () => {
    this.setState({ visable: true });
  };
  // 影藏新增账号弹出框
  handleCancel = () => {
    this.setState({ visable: false });
  };

  // 删除
  removeNetwork = n => {
    const { delNetwork, getNetworkObj } = this.props.networkStore;
    Modal.confirm({
      content: "确定删除吗？",
      onOk() {
        delNetwork({ gatewayAccountId: n.gatewayAccountId }).then(data => {
          optionTip(data.code, "删除成功！", message, getNetworkObj);
        });
      }
    });
  };
  render() {
    const { networkObj } = this.props.networkStore;
    const { btns, visable, spinning, pageHeight } = this.state;
    return (
      <div className="network-page">
        <Spin spinning={spinning} tip="正在加载...">
          <ContentHead title="已添加账号" btns={btns} />
          <Row
            gutter={16}
            className="overflow-content"
            style={{ height: pageHeight }}
          >
            {networkObj && networkObj.data.length > 0 ? (
              networkObj.data.map(n => {
                return (
                  <Col span={8} key={n.gatewayAccountId}>
                    <Card
                      title={`账号：${n.phone}`}
                      extra={
                        <Icon
                          type="close"
                          onClick={() => {
                            this.removeNetwork(n);
                          }}
                        />
                      }
                    >
                      <p>{n.beerglassNum}个杯子</p>
                      <p>{n.triggerNum}启动器</p>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div className="no-data-tips">暂无数据</div>
            )}
          </Row>
          {visable && <AccountModal handleCancel={this.handleCancel} />}
        </Spin>
      </div>
    );
  }
}

export default NetWork;

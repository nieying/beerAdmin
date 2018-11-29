import React, { Component } from "react";
import { Row, Col, Card, Icon, Spin, Button } from "antd";
import { observer, inject } from "mobx-react";

import ContentHead from "components/ContentHead";

@inject("networkStore")
@observer
class Lighting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
      pageHeight: window.innerHeight - 160,
      btns: [{ name: "新增", type: "primary", onClick: this.addNew }]
    };
  }

  componentWillMount() {
    // 获取数据
  }

  addNew = () => {
    this.props.history.push('/lighting/add-gateway')
  };

  // 按钮事件
  handleClick = () => {
    // todo
  };
  render() {
    const { accountObj } = this.props.networkStore;
    const { btns, spinning, pageHeight } = this.state;
    return (
      <div className="lighting-page activity-page">
        <Spin spinning={spinning} tip="正在加载...">
          <ContentHead title="灯光效果" btns={btns} />
          <Row
            gutter={16}
            className="overflow-content"
            style={{ height: pageHeight }}
          >
            {accountObj.accountList.map(acc => {
              return (
                <Col span={8} key={acc.id}>
                  <Card>
                    <p>{acc.text1}</p>
                    <Button
                      type="primary"
                      size="small"
                      onClick={this.handleClick}
                    >
                      启动
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Spin>
      </div>
    );
  }
}

export default Lighting;

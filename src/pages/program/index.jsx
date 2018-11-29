import React, { Component } from "react";
import { Row, Col, Card, Icon, Spin, Button, Modal, message } from "antd";
import { observer, inject } from "mobx-react";
import { optionTip } from "utils/constant";

import ContentHead from "components/ContentHead";
import ProgramModal from "./ProgramModal";

@inject("programStore")
@observer
class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visable: false,
      spinning: false,
      pageHeight: window.innerHeight - 160,
      btns: [{ name: "新增节目", type: "primary", onClick: this.addNewProgram }]
    };
  }

  componentWillMount() {
    // 获取数据
    this.props.programStore.getProgramObj();
  }

  // 删除账号
  removeProgram = id => {
    const { deleteProgram, getProgramObj } = this.props.programStore;
    Modal.confirm({
      content: "确定删除吗?",
      onOk() {
        deleteProgram({ programId: id }).then(data => {
          optionTip(data.code, "删除成功", message, getProgramObj);
        });
      }
    });
  };
  // 显示新增账号弹出框
  addNewProgram = () => {
    this.setState({ visable: true });
  };
  // 影藏新增账号弹出框
  handleCancel = () => {
    this.setState({ visable: false });
  };

  // 渲染投票按钮
  rendOpeator = p => {
    // voteStatus 0-未启动，1-已启动， 2-结束
    return (
      <Button
        type="primary"
        size="small"
        disabled={p.voteStatus === 2}
        onClick={() => {
          this.handlePoll(p);
        }}
      >
        {p.voteStatus === 0 && "开始投票"}
        {p.voteStatus === 1 && "结束投票"}
      </Button>
    );
  };
  // 开始，重新，结束投票
  handlePoll = type => {
    // todo
  };
  render() {
    const { programObj } = this.props.programStore;
    const { btns, visable, spinning, pageHeight } = this.state;
    return (
      <div className="activity-page">
        <Spin spinning={spinning} tip="正在同步...">
          <ContentHead title="已添加账号" btns={btns} />
          <Row
            gutter={16}
            className="overflow-content"
            style={{ height: pageHeight }}
          >
            {programObj && programObj.data.length > 0 ? (
              programObj.data.map(p => {
                return (
                  <Col span={8} key={p.programId}>
                    <Card
                      // title={`节目名称：${p.phone}`}
                      extra={
                        <Icon
                          type="close"
                          onClick={() => {
                            this.removeProgram(p.programId);
                          }}
                        />
                      }
                    >
                      <p>节目名称：{p.programName}</p>
                      <p>票数：{p.voteTotalNum}</p>
                      {this.rendOpeator(p)}
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div className="no-data-tips">暂无数据</div>
            )}
          </Row>
          {visable && <ProgramModal handleCancel={this.handleCancel} />}
        </Spin>
      </div>
    );
  }
}

export default Program;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import { observer, inject } from "mobx-react";
import { spawn } from "child_process";

@inject("networkStore")
@observer
class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: window.innerHeight - 280,
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          width: 60,
          render: (text, record, index) => <span>{index + 1}</span>
        },
        {
          title: "活动名称",
          dataIndex: "name",
          width: 100
        },
        {
          title: "奖品名称",
          dataIndex: "prizeName",
          width: 120
        },
        {
          title: "活动类型",
          dataIndex: "activityType",
          width: 100
        },
        {
          title: "抽奖等级",
          dataIndex: "level",
          width: 100
        },
        {
          title: "活动时间",
          dataIndex: "date",
          width: 120
        },
        {
          title: "中奖人数",
          dataIndex: "winLotteryNum",
          width: 75
        },
        {
          title: "操作",
          key: "operation",
          width: 60,
          render: () => {
            return (
              <div>
                <Link to={`/lottery/list/${this.props.pageType}`}> 查询</Link>
              </div>
            );
          }
        }
      ]
    };
  }

  componentWillMount() {}

  render() {
    const { data } = this.props;
    const { columns, pageHeight } = this.state;
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, size: "small" }}
        scroll={{ y: pageHeight }}
        rowKey={(record) => record.id}
      />
    );
  }
}

export default Lottery;

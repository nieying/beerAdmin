import React, { Component } from "react";
import { Table } from "antd";
import { observer, inject } from "mobx-react";
import { urlParams } from "utils/constant";
@inject("networkStore")
@observer
class LotteryList extends Component {
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
          dataIndex: "reward",
          width: 120
        },
        {
          title: "活动类型",
          dataIndex: "address",
          width: 100
        },
        {
          title: "中奖姓名",
          dataIndex: "lotteryName",
          width: 80
        },
        {
          title: "中奖工号",
          dataIndex: "number",
          width: 100
        },
        {
          title: "中奖微信名",
          dataIndex: "wechatName",
          width: 100
        },
        {
          title: "活动时间",
          dataIndex: "date",
          width: 100
        }
      ],
      data: []
    };
  }
  componentWillMount() {
    const splitPathName = this.props.location.pathname.split("/");
    const urlParams = splitPathName[splitPathName.length - 1];
    console.log("-->", urlParams);
    // 获取数据
    const data = [];
    for (let i = 0; i < 30; i++) {
      data.push({
        key: i,
        name: `年会 ${i}`,
        reward: "iphone xs max",
        lotteryName: "聂颖",
        number: "80021682",
        wechatName: "一枝花",
        date: "2019-01-20 20:00",
        address: `世界之窗 ${i}`
      });
    }
    this.setState({ data: data });
  }

  render() {
    const { columns, data, pageHeight } = this.state;
    return (
      <div className="lottery-page">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10, size: "small" }}
          scroll={{ y: pageHeight }}
        />
      </div>
    );
  }
}

export default LotteryList;

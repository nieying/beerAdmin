import React, { Component } from "react";
import { Table } from "antd";
import { observer, inject } from "mobx-react";

@inject("signStore")
@observer
class SignTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: window.innerHeight - 260,
      btns: [
        { name: "设置签到起始时间", type: "primary", onClick: this.showModal },
        { name: "清空签到信息", type: "primary", onClick: this.syncDevice },
        { name: "关闭签到", type: "primary", onClick: this.addNewShow },
        { name: "导出", type: "primary", onClick: this.syncDevice }
      ],
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          width: 60,
          render: (text, record, index) => <span>{index + 1}</span>
        },
        {
          title: "姓名",
          dataIndex: "employeeName",
          width: 100
        },
        {
          title: "工号",
          dataIndex: "employeeNo",
          width: 100
        },
        {
          title: "微信名",
          dataIndex: "nickName",
          width: 100
        },
        {
          title: "签到时间",
          dataIndex: "createTime",
          width: 180
        }
      ],
      data: []
    };
  }

  render() {
    const { signObj } = this.props;
    const { columns, pageHeight } = this.state;
    return (
      <Table
        columns={columns}
        dataSource={signObj && signObj.data}
        pagination={{ pageSize: 10, size: "small" }}
        scroll={{ y: pageHeight }}
        rowKey={record => record.signId}
      />
    );
  }
}

export default SignTable;

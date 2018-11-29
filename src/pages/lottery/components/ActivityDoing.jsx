import React, { Component } from "react";
import { Table, Modal, message } from "antd";
import { observer, inject } from "mobx-react";
import { optionTip } from "utils/constant";

@inject("lotteryStore")
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
          width: 100
        },
        {
          title: "活动类型",
          dataIndex: "type",
          width: 100
        },
        {
          title: "中奖人数",
          dataIndex: "winLotteryNum",
          width: 80
        },
        {
          title: "操作",
          key: "operation",
          width: 80,
          render: (text, record) => {
            return (
              <div>
                <a
                  onClick={() => {
                    this.edit(record);
                  }}
                >
                  编辑&nbsp;
                </a>
                <a
                  onClick={() => {
                    this.removeLottery(record);
                  }}
                >
                  删除
                </a>
              </div>
            );
          }
        }
      ]
    };
  }

  componentWillMount() {}

  edit = item => {
    this.props.addLottery(item);
  };

  removeLottery = record => {
    const that = this;
    Modal.confirm({
      content: "确定删除吗？",
      onOk() {
        that.del(record);
      }
    });
  };

  del = record => {
    const { deleteLottery, deleteAppend } = this.props.lotteryStore;
    const { getData, pageType } = this.props;
    switch (pageType) {
      case "normal":
        deleteLottery({ id: record.id }).then(data => {
          optionTip(data.code, "删除成功", message, getData);
        });
        break;

      case "append":
        deleteAppend({ id: record.id }).then(data => {
          optionTip(data.code, "删除成功", message, getData);
        });
        break;
      case "integral":
        deleteIntegral({ id: record.id }).then(data => {
          optionTip(data.code, "删除成功", message, getData);
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { data } = this.props;
    const { columns, pageHeight } = this.state;
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, size: "small" }}
        scroll={{ y: pageHeight }}
        rowKey={record => record.id}
      />
    );
  }
}

export default Lottery;

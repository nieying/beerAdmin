import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Modal, Form, Select, Input, message } from "antd";
import UploadFile from "components/UploadFile";
import { optionTip } from "utils/constant";
const FormItem = Form.Item;
const Option = Select.Option;

@inject("lotteryStore")
@observer
@Form.create()
class ShowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lotteryTypeOptions: [
        { id: 1, label: "抽奖（签到员工）", value: "1" },
        { id: 2, label: "抽奖（员工）", value: "2" }
      ],
      lotteryLevelOptions: [
        { id: 0, label: "特等奖", value: "0" },
        { id: 1, label: "一等奖", value: "1" },
        { id: 2, label: "二等奖", value: "2" },
        { id: 3, label: "三等奖", value: "3" },
        { id: 4, label: "四等奖", value: "4" },
        { id: 5, label: "五等奖", value: "5" }
      ]
    };
  }
  componentDidMount() {
    const { curItem } = this.props;
    console.log("curItem", curItem);
    if (curItem && curItem.name) {
      this.props.form.setFieldsValue({
        name: curItem.name,
        prizeName: curItem.prizeName,
        prizePicUrl: curItem.prizePicUrl || '1111',
        activityType: curItem.activityType && curItem.activityType.toString(),
        lotteryRank: curItem.lotteryRank && curItem.lotteryRank.toString(),
        winLotteryNum: curItem.winLotteryNum
      });
    }
  }
  handleOk = e => {
    e.preventDefault();
    const { curItem } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.prizePicUrl = '111';
        if (curItem && curItem.name) {
          values.id = curItem.id;
          this.update(values);
        } else {
          this.add(values);
        }
      }
    });
  };

  update = values => {
    const { pageType } = this.props;
    switch (pageType) {
      case "normal":
        this.props.lotteryStore.updateLottery(values).then(data => {
          optionTip(data.code, "修改成功！", message, this.handleOkCallback);
        });
        break;
      case "append":
        this.props.lotteryStore.updateAppend(values).then(data => {
          optionTip(data.code, "修改成功！", message, this.handleOkCallback);
        });
        break;
      case "integral":
        this.props.lotteryStore.updateIntegral(values).then(data => {
          optionTip(data.code, "修改成功！", message, this.handleOkCallback);
        });
        break;
      default:
        break;
    }
  };
  add = values => {
    const { pageType } = this.props;
    switch (pageType) {
      case "normal":
        this.props.lotteryStore.addLottery(values).then(data => {
          optionTip(data.code, "新增成功！", message, this.handleOkCallback);
        });
        break;
      case "append":
        this.props.lotteryStore.addAppend(values).then(data => {
          optionTip(data.code, "新增成功！", message, this.handleOkCallback);
        });
        break;
      case "integral":
        this.props.lotteryStore.addIntegral(values).then(data => {
          optionTip(data.code, "新增成功！", message, this.handleOkCallback);
        });
        break;
      default:
        break;
    }
  };

  handleOkCallback = () => {
    this.props.getData();
    this.props.handleCancel();
  };

  // 选择抽奖类型
  handleSelect = value => {
    console.log(`selected ${value}`);
  };

  render() {
    const { lotteryTypeOptions, lotteryLevelOptions } = this.state;
    const { handleOk, handleCancel, pageType } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        centered
        title="新增抽奖"
        visible={true}
        onOk={this.handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="活动名称"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请填写账号" }]
            })(<Input />)}
          </FormItem>
          <FormItem
            label="奖品名称"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("prizeName", {
              rules: [{ required: true, message: "请填写账号" }]
            })(<Input />)}
          </FormItem>
          <FormItem
            label="奖品图片"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("prizePicUrl", {
              rules: [{ required: false, message: "请填写账号" }]
            })(<UploadFile />)}
          </FormItem>
          {pageType !== "append" && (
            <div>
              <FormItem
                label="抽奖类型"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
                required
              >
                {getFieldDecorator("activityType", {
                  rules: [{ required: true, message: "请选择抽奖类型" }]
                })(
                  <Select>
                    {lotteryTypeOptions.map(opt => {
                      return (
                        <Option key={opt.id} value={opt.value}>
                          {opt.label}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </FormItem>
              <FormItem
                label="抽奖等级"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
                required
              >
                {getFieldDecorator("lotteryRank", {
                  rules: [{ required: true, message: "请选择抽奖等级" }]
                })(
                  <Select>
                    {lotteryLevelOptions.map(opt => {
                      return (
                        <Option key={opt.id} value={opt.value}>
                          {opt.label}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </FormItem>
            </div>
          )}
          <FormItem
            label="中奖人数"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("winLotteryNum", {
              rules: [{ required: true, message: "请输入中奖人数" }]
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default ShowModal;

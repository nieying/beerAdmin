import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Modal, Form, Select, Input, message } from "antd";
import { optionTip } from "utils/constant";

const FormItem = Form.Item;

@inject("networkStore")
@observer
@Form.create()
class AccountModal extends Component {
  handleOk = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.networkStore.addNetwork(values).then(data => {
          optionTip(data.code, "新增成功！", message, this.handleCallback);
        });
      }
    });
  };

  handleCallback = () => {
    this.props.networkStore.getNetworkObj();
    this.props.handleCancel();
  };

  render() {
    const { handleCancel } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="新增账号"
        visible={true}
        onOk={this.handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="账号"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "请填写账号" },
                {
                  pattern: new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/, "g"),
                  message: "请输入正确的手机号"
                }
              ]
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default AccountModal;

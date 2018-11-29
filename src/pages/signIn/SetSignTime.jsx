import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Modal, Form, DatePicker } from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

@inject("networkStore")
@observer
@Form.create()
class SetSignTime extends Component {
  handleOk = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.networkStore.addAccount(values);
        this.props.handleCancel();
      }
    });
  };

  render() {
    const { handleOk, handleCancel } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const rangeConfig = {
      rules: [{ type: "array", required: true, message: "请选择时间!" }]
    };
    return (
      <Modal
        title="设置签到时间"
        visible={true}
        onOk={this.handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            label="开始~结束时间"
          >
            {getFieldDecorator("range-time-picker", rangeConfig)(
              <RangePicker
                showTime
                locale={locale}
                format="YYYY-MM-DD HH:mm:ss"
              />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default SetSignTime;

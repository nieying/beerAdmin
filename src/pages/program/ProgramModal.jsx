import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Modal, Form, Input, message } from "antd";
import UploadFile from "components/UploadFile";
import { optionTip } from "utils/constant";

const FormItem = Form.Item;

@inject("programStore")
@observer
@Form.create()
class ProgramModal extends Component {
  handleOk = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.programPicUrl = '111'
        this.props.programStore.addProgram(values).then(data => {
          optionTip(data.code, "新增成功", message, this.callBack);
        });
      }
    });
  };

  callBack = () => {
    this.props.programStore.getProgramObj();
    this.props.handleCancel();
  };
  render() {
    const { handleCancel } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="新增节目"
        visible={true}
        onOk={this.handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="节目名称"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("programName", {
              rules: [{ required: true, message: "请填节目名称" }]
            })(<Input />)}
          </FormItem>
          <FormItem
            label="节目图片"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <UploadFile />
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default ProgramModal;

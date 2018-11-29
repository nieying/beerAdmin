/**
 * label 表单label
 * type 表单类型
 * required 是否必填
 * tipMsg 提示信息
 */
import React, { Component } from "react";
import { Form, Select, Input, Button } from "antd";

const FormItem = Form.Item;

class FormPack extends Component {
  render() {
    const { label, required, tipMsg } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem label={label} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
        {getFieldDecorator("note", {
          rules: [{ required: required, message: tipMsg }]
        })(<Input />)}
      </FormItem>
    );
  }
}

export default FormPack;

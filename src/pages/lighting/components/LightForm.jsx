import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Form, Button, Input, Select, Icon } from "antd";
import LightColor from "./LightColor";

const FormItem = Form.Item;
const Option = Select.Option;

@inject("lightingStore")
@observer
@Form.create()
class LightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
      curDesginMode: "all",
      pageHeight: window.innerHeight - 80
    };
  }
  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    // console.log("nextProps", nextProps);
    // this.setState({})
  }

  // 选择设置模式
  selectDesginMode = val => {
    this.setState({ curDesginMode: val });
  };
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //todo
      }
    });
  };
  render() {
    const { formItemLayout, tailFormItemLayout } = this.props;
    const { curDesginMode } = this.state;
    const {
      designModeOptions,
      flashModeOptions
    } = this.props.lightingStore.lightObj;
    const { getFieldDecorator } = this.props.form;
    const { pageType } = this.props;
    return (
      <div className="light-form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={pageType !== "add" ? "效果名称" : ""}
          >
            {getFieldDecorator("resultName", {
              rules: [{ required: true, message: "请填写效果名称" }]
            })(<Input placeholder="效果名称" />)}
          </FormItem>
          {pageType === "gateway" && (
            <FormItem label="设置模式" {...formItemLayout} required>
              <Select
                defaultValue={curDesginMode}
                onChange={this.selectDesginMode}
              >
                {designModeOptions.map(opt => {
                  return (
                    <Option key={opt.id} value={opt.value}>
                      {opt.label}
                    </Option>
                  );
                })}
              </Select>
            </FormItem>
          )}
          {pageType === "gateway" && curDesginMode === "only" && (
            <FormItem label="帐号" {...formItemLayout}>
              {getFieldDecorator("resultName", {
                rules: [{ required: true }]
              })(<Input />)}
            </FormItem>
          )}
          <FormItem
            label={pageType !== "add" ? "闪灯模式" : ""}
            {...formItemLayout}
          >
            <Select defaultValue="1">
              {flashModeOptions.map(opt => {
                return (
                  <Option key={opt.id} value={opt.value}>
                    {opt.label}
                  </Option>
                );
              })}
            </Select>
          </FormItem>
          <FormItem
            label={pageType !== "add" ? "闪灯颜色" : ""}
            {...formItemLayout}
          >
            {getFieldDecorator("flashColor", {
              rules: [{ required: true, message: "请填写效果名称" }]
            })(<LightColor />)}
          </FormItem>
          <FormItem {...tailFormItemLayout} className="btn-opt">
            <Button type="primary" htmlType="submit">
              确认
            </Button>
            <Button> 取消 </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default LightForm;

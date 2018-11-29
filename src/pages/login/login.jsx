import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { inject, observer } from "mobx-react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import BGParticle from "utils/BGParticle";

const FormItem = Form.Item;

@withRouter
@inject("commonStore")
@observer
@Form.create()
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  componentDidMount() {
    this.particle = new BGParticle("backgroundBox");
    this.particle.init();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.push("/");
        // this.props.commonStore.setIsLogin(0);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-page">
        <div id="backgroundBox"  />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "请输入账号!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="账号"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登入
            </Button>
            {/* Or <a href="">注册</a> */}
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Login;

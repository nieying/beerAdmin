import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import LightForm from "./components/LightForm";

@inject("lightingStore")
@observer
class AddGateLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderDom: null,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      },
      pageHeight: window.innerHeight - 160
    };
  }

  componentWillMount() {
    // 获取数据
    // this.props.lightingStore.getFlashColors();
  }

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //todo
      }
    });
  };
  render() {
    const { pageHeight } = this.state;
    return (
      <div className="add-gateway-light" style={{ height: pageHeight }}>
        <LightForm {...this.state} pageType="gateway"/>
      </div>
    );
  }
}

export default AddGateLight;

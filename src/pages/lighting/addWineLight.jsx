import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Row, Col } from "antd";
import LightTable from "./components/LightTable";
import LightForm from "./components/LightForm";

@inject("lightingStore")
@observer
class AddWineLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderDom: null,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 0 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 24,
            offset: 0
          }
        }
      },
      pageHeight: window.innerHeight - 160
    };
  }

  componentWillMount() {}

  render() {
    const { pageHeight } = this.state;
    return (
      <div className="entry-wine" style={{ height: pageHeight }}>
        <Row>
          <Col span={15}>
            <LightTable pageType="add" />
          </Col>
          <Col span={8} offset={1}>
            <LightForm pageType="add" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddWineLight;

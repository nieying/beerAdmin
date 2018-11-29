import React, { Component } from "react";
import { Button } from "antd";

class ContentHead extends Component {
  componentDidMount() {}

  render() {
    const { title, btns } = this.props;
    return (
      <div className="content-header">
        <h4>{title}</h4>
        <div className="opeator-group">
          {btns.map((btn, index) => {
            return (
              <Button key={index} type={btn.type} onClick={btn.onClick}>
                {btn.name}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ContentHead;

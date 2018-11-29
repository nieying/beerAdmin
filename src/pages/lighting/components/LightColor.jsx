import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Icon } from "antd";

@inject("lightingStore")
@observer
class LightColor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    const { flashColors } = this.props.lightingStore.lightObj;
    return (
      <ul className="flash-color">
        {flashColors.map(item => {
          return (
            <li
              key={item.id}
              onClick={() => {
                this.setState({ render: true });
                this.props.lightingStore.selectColor(item);
              }}
              style={{ background: item.val2 }}
            >
              {item.checked && (
                <span className="hasChecked">
                  <Icon type="check" />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LightColor;

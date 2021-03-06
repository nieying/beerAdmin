import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LotteryFlag from "./components/LotteryFlag";


@inject("networkStore")
@observer
class LotteryIntegral extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    // 获取数据
  }

 
  render() {
    return (
      <div className="lottery-page">
        <LotteryFlag pageType="integral"/>
      </div>
    );
  }
}

export default LotteryIntegral;

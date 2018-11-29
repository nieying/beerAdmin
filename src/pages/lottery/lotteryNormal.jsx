import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import LotteryFlag from "./components/LotteryFlag";

@inject("lotteryStore")
@observer
class LotteryNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visable: false
    };
  }
  componentWillMount() {
    // 获取数据
  }

  render() {
    return (
      <div className="lottery-page">
        <LotteryFlag pageType="normal" />
      </div>
    );
  }
}

export default LotteryNormal;

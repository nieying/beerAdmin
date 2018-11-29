import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LightTable from "./components/LightTable";

@inject("lightingStore")
@observer
class EntryWine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: window.innerHeight - 160
    };
  }

  componentWillMount() {
    // 获取数据
  }

  render() {
    const { pageHeight } = this.state;
    return (
      <div className="entry-wine" style={{ height: pageHeight }}>
        <LightTable pageType="entry" />
      </div>
    );
  }
}

export default EntryWine;

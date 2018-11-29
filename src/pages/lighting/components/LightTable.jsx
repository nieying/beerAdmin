import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Popover, Input } from "antd";

@inject("lightingStore")
@observer
class LightTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSelectTr: "",
      curSelectTd: ""
    };
  }

  componentWillMount() {
    // 获取数据
    this.props.lightingStore.getWineTableData();
  }
  // 点击表格
  handleTd = (tr, td) => {
    const { updateVisible, selectPattern } = this.props.lightingStore;
    const { pageType } = this.props;
    if (pageType === "add") {
      selectPattern(tr, td, td.isChecked);
    } else {
      updateVisible(tr, td, td.visible);
    }
  };
  onPressEnter = (e, tr, td) => {
    this.props.lightingStore.updateMacAddress(tr, td, e.target.value);
  };
  renderPopoverContent = (tr, td) => {
    return (
      <div className="popover-content">
        <Input
          size="small"
          onPressEnter={e => {
            this.onPressEnter(e, tr, td);
          }}
        />
      </div>
    );
  };
  render() {
    const { tableData, curSelectColor } = this.props.lightingStore;
    console.log(tableData)
    return (
      <table border="1">
        <tbody>
          {tableData.map(trItem => {
            return (
              <tr key={trItem.index}>
                {trItem.tds.map(tdItem => {
                  return (
                    <Popover
                      key={`${trItem.index}-${tdItem.index}`}
                      trigger="click"
                      visible={tdItem.visible}
                      content={this.renderPopoverContent(trItem, tdItem)}
                      title="请输入MAC地址"
                    >
                      <td
                        style={{
                          background: `${
                            tdItem.isChecked
                              ? curSelectColor
                              : tdItem.mac
                              ? "#c5c5c5"
                              : ""
                          }`
                        }}
                        onClick={() => {
                          this.handleTd(trItem, tdItem);
                        }}
                      />
                    </Popover>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default LightTable;

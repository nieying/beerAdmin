import React, { Component } from "react";
import { Tabs, Spin, Button } from "antd";
import { observer, inject } from "mobx-react";

import LotteryModal from "./LotteryModal";
import ActivityDoing from "./ActivityDoing";
import ActivityDone from "./ActivityDone";

const TabPane = Tabs.TabPane;

@inject("lotteryStore")
@observer
class LotteryFlag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visable: false,
      curTab: "0",
      curItem: ""
    };
  }
  componentWillMount() {
    // 获取列表数据
    this.getData();
    // 获取中奖总数
    this.props.pageType === "normal" &&
      this.props.lotteryStore.getWinnnerNum();
  }
  //   tab切换
  handleTab = tab => {
    this.setState({ curTab: tab }, () => {
      this.getData();
    });
  };

  // 获取数据
  getData = () => {
    const { pageType } = this.props;
    console.log(pageType);
    switch (pageType) {
      case "normal":
        this.props.lotteryStore.getLotteryObj({
          status: this.state.curTab
        });
        break;

      case "append":
        this.props.lotteryStore.getAppendObj({
          status: this.state.curTab
        });
        break;
      case "integral":
        this.props.lotteryStore.getIntegralObj({
          status: this.state.curTab
        });
        break;
      default:
        break;
    }
  };

  // 显示新增,编辑账号弹出框
  addLottery = item => {
    this.setState({ visable: true, curItem: item });
  };
  // 影藏新增账号弹出框
  handleCancel = () => {
    this.setState({ visable: false });
  };

  rendOperations = () => {
    return (
      <div>
        {this.state.curTab === "2" && (
          <Button size="small" onClick={this.importLottery}>
            导出名单
          </Button>
        )}
        {this.state.curTab === "0" && (
          <Button size="small" onClick={this.addLottery}>
            新增抽奖
          </Button>
        )}
      </div>
    );
  };
  render() {
    const { visable, curTab, curItem } = this.state;
    const { pageType } = this.props;
    const { lotteryObj } = this.props.lotteryStore;
    return (
      <div>
        <Tabs
          onChange={this.handleTab}
          tabBarExtraContent={this.rendOperations()}
        >
          <TabPane tab="未进行活动" activeKey={curTab} key="0">
            {pageType === "lottery" && (
              <div className="lotery-total">
                已签到人数：
                <Link to="">1200</Link>人，已中奖人数：
                <Link to="">1200</Link>人
              </div>
            )}
            <ActivityDoing
              pageType={pageType}
              data={lotteryObj.data}
              addLottery={this.addLottery}
              getData={this.getData}
            />
          </TabPane>
          <TabPane tab="已完成活动" key="2">
            <ActivityDone
              pageType={pageType}
              data={lotteryObj.data}
              getData={this.getData}
            />
          </TabPane>
        </Tabs>
        {visable && (
          <LotteryModal
            pageType={pageType}
            curItem={curItem}
            handleCancel={this.handleCancel}
            getData={this.getData}
          />
        )}
      </div>
    );
  }
}

export default LotteryFlag;

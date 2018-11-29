import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { Switch } from "react-router-dom";

import PrivateRoute from "routes/PrivateRoute";
import Network from "pages/network/index";
import Program from "pages/program/index";
import LotteryNormal from "pages/lottery/lotteryNormal";
import LotteryList from "pages/lottery/lotteryList";
import LotteryAppend from "pages/lottery/lotteryAppend";
import LotteryIntegral from "pages/lottery/lotteryIntegral";
import LotteryShake from "pages/lottery/lotteryShake";
import lightList from "pages/lighting/lightList";
import AddGatewayLight from "pages/lighting/addGatewayLight";
import AddWineLight from "pages/lighting/addWineLight";
import EntryWine from "pages/lighting/entryWine";
import SignIn from "pages/signIn/index";

class Index extends Component {
  state = {};

  handleClick = e => {};

  render() {
    return (
      <Switch>
        {/* 网络 */}
        <PrivateRoute exact path="/network" component={Network} />
        {/* 节目 */}
        <PrivateRoute exact path="/program" component={Program} />
        {/* 抽奖start */}
        <PrivateRoute exact path="/lottery/list/:type" component={LotteryList} />
        <PrivateRoute exact path="/lottery/normal" component={LotteryNormal} />
        <PrivateRoute exact path="/lottery/append" component={LotteryAppend} />
        <PrivateRoute exact path="/lottery/integral" component={LotteryIntegral} />
        <PrivateRoute exact path="/lottery/shake" component={LotteryShake} />
        {/* 灯光*/}
        <PrivateRoute exact path="/lighting/list" component={lightList} />
        <PrivateRoute exact path="/lighting/add-gateway" component={AddGatewayLight} />
        <PrivateRoute exact path="/lighting/add-wine" component={AddWineLight} />
        <PrivateRoute exact path="/lighting/entry-wine" component={EntryWine} />
        {/* 签到 */}
        <PrivateRoute exact path="/sign-in" component={SignIn} />
        <Redirect exact from='' to='/network'/>
      </Switch>
    );
  }
}

export default Index;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { inject, observer } from "mobx-react";

import PrivateRoute from "routes/PrivateRoute";
import Login from "pages/login/login";
import SignWall from "pages/other/signWall1";
import MainContent from "components/MainContent";


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-wall" component={SignWall} />
        <PrivateRoute path="/" component={MainContent} />
      </Switch>
    );
  }
}



export default App;

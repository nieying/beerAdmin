import React from "react";
import ReactDOM from "react-dom";
import "styles/index.scss";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import * as THREEOBJ from "three";
window.THREE = { ...THREEOBJ };

import stores from "stores";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <LocaleProvider locale={zh_CN}>
        <App />
      </LocaleProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();

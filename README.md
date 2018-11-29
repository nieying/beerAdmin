#### 项目说明

- 该项目使用 [Create React App](https://github.com/facebookincubator/create-react-app)脚手架创建的。
- 该项目分别使用了不同的数据状态管理，分别对应不同的分支

#### 项目框架

该项目使用的 react+react-router+mobx+antd 全家桶

#### 书写规范

- 组件命名： 大驼峰
- 页面命名： 小驼峰
- 样式命名： 页面-模块 page-mudule
- 路由文件： 所有的路由统一放在/src/routes/index.jsx 文件管理

#### 目录结构

- [config] -- webpack 配置文件
- [public]
  - favicon.ico --- 网站图标
  - index.html --- 入口 html
  - mainfest.json
- [scripts] --- 开发环境执行文件
- [src] --- 业务逻辑代码
  - [assets] --- 静态文件，样式文件
    - [images] --- 图片
    - [styles] --- 样式
  - [components] --- 公共组件
  - [json] --- 静态 json 数据（在后台没有返回接口的情况下自己模拟数据）
  - [pages] --- 页面
  - [routes] --- 路由
  - [stores] --- 数据状态管理
  - [utils] --- 插件
    - BGParticle.js --- 登入页面背景动态效果
  - App.jsx
  - index.jsx --- 入口文件

#### 用到的插件

    * BGParticle --- 登入页面背景动态效果
    * screenfull --- 全屏模式

#### 如何启动

- start

```
npm start
```

- build

```
npm run build
```

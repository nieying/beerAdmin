import React, { Component } from "react";
import { Row, Col, message } from "antd";
import { observer, inject } from "mobx-react";
import mp4 from "images/sign.mp4";

import headPng from "images/head.png";

@inject("signStore")
@observer
class SignWall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true,
      imgs: []
    };
  }

  componentWillMount() {
    const imgs = [];
    for (var i = 0; i <= 800; i++) {
      imgs.push({ id: i, isAction: false });
    }
    this.setState({ imgs });
  }

  componentDidMount() {
    this.updateImgs();
  }

  updateImgs = () => {
    setInterval(() => {
      const randomNum = parseInt(Math.random() * 20);
      const { imgs } = this.state;
      const imgsCopy = imgs.map(img => {
        img.isAction = false;
        if (img.id === randomNum) {
          img.isAction = true;
        }
        return img;
      });
      this.setState({ imgs: imgsCopy });
    }, 3000);
  };

  render() {
    const { imgs, showAll } = this.state;
    console.log("1");
    return (
      <div className="sign-wall">
        {/* <video
          src={mp4}
        //   width="320"
        //   height="240"
        //   controls="controls"
          autoPlay="autoPlay"
          loop="loop"
        >
          Your browser does not support the video tag.
        </video> */}
        {!showAll ? (
          <Row>
            <div className="all animate1">
              {imgs.map(img => {
                return (
                  // className={img.isAction ? "animate" : ""}
                  <span key={img.id}>img</span>
                );
              })}
            </div>
          </Row>
        ) : (
          <Row>
            <Col span={3}>
              <div className="c">
                <div className="c-1">
                  {imgs.map(img => {
                    return (
                      <span
                        key={img.id}
                        className={img.isAction ? "animate" : ""}
                      >
                        img
                      </span>
                    );
                  })}
                </div>
                <div className="c-2">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="c-3">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
              </div>
            </Col>
            <Col span={2} offset="1">
              <div className="underline">
                <div>
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
              </div>
            </Col>
            <Col span={3} offset="1">
              <div className="l">
                <div className="l-1">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="l-2">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
              </div>
            </Col>
            <Col span={2} offset="1">
              <div className="i">
                <div className="i-1">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="i-2">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
              </div>
            </Col>
            <Col span={3} offset="1">
              <div className="f">
                <div className="f-1">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="f-2">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="f-3">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
              </div>
            </Col>
            <Col span={3} offset="1">
              <div className="e">
                <div className="e-1">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="e-2">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="e-3">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
                <div className="e-4">
                  {imgs.map(img => {
                    return <span key={img.id}>img</span>;
                  })}
                </div>
              </div>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default SignWall;

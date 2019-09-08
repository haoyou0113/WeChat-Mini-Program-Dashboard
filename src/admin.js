import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Admin extends Component {
  render() {
    return (
      <Row>
        <Col span={3}>col-12</Col>
        <Col span={21}>col-12</Col>
      </Row>
    );
  }
}

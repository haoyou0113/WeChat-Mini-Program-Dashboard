import React, { Component } from 'react';
import { Card, Button, Spin, Icon, Alert } from 'antd';
import './index.less';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default'
    };
  }
  render() {
    return (
      <div>
        <Card title='Spin Components' className='card-wrap'>
          <Spin size='large' />
          <Spin size='default' />
          <Spin size='small' />
        </Card>
      </div>
    );
  }
}

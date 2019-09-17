import React, { Component } from 'react';
import { Radio, Button, Card, notification, message } from 'antd';
import './index.less';

export default class Message extends Component {
  showMassage = type => {
    message[type]('congratulation');
  };
  render() {
    return (
      <div>
        <Card title='Notice' className='card-wrap'>
          <Button type='primary' onClick={() => this.showMassage('success')}>
            Success
          </Button>
          <Button type='primary' onClick={() => this.showMassage('info')}>
            Info
          </Button>
          <Button type='primary' onClick={() => this.showMassage('warning')}>
            Warning
          </Button>
          <Button type='primary' onClick={() => this.showMassage('error')}>
            Error
          </Button>
          <Button type='primary' onClick={() => this.showMassage('loading')}>
            Loading
          </Button>
        </Card>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Radio, Button, Card, notification } from 'antd';
import './index.less';

export default class Notice extends Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      });
    }
    notification[type]({
      message: 'vocation!',
      description: 'you are fired !'
    });
  };
  render() {
    return (
      <div>
        <Card>
          <Button
            type='primary'
            onClick={() => this.openNotification('success', 'bottomRight')}
          >
            success
          </Button>
          <Button
            type='primary'
            onClick={() => this.openNotification('info', 'topLeft')}
          >
            Info
          </Button>
          <Button
            type='primary'
            onClick={() => this.openNotification('warning')}
          >
            Warning
          </Button>
          <Button type='primary' onClick={() => this.openNotification('error')}>
            Error
          </Button>
        </Card>
      </div>
    );
  }
}

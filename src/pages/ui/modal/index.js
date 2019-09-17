import React, { Component } from 'react';
import { Radio, Button, Modal } from 'antd';
import './index.less';

export default class Uibutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal2: false
    };
  }
  info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {}
    });
  };

  success = () => {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...'
    });
  };

  error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...'
    });
  };

  warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...'
    });
  };
  test = () => {
    this.setState({
      showModal2: true
    });
  };
  handleComfirm = () => {
    Modal.confirm({
      title: 'sure?',
      content: 'are you sure?',
      onOk() {
        alert('ok');
      },
      onCancel() {
        alert('cancel');
      }
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.test}>Info</Button>
        <Button onClick={this.success}>Success</Button>
        <Button onClick={this.error}>Error</Button>
        <Button onClick={this.warning}>Warning</Button>
        <Modal
          title='React'
          visible={this.state.showModal2}
          okText='OK'
          cancelText='Cancel'
          onCancel={() => {
            this.setState({
              showModal2: false
            });
          }}
          onOk={this.handleComfirm}
        ></Modal>
      </div>
    );
  }
}

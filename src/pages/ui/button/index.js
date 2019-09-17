import React, { Component } from 'react';
import { Radio, Button } from 'antd';
import './index.less';

export default class Uibutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default'
    };
  }
  onChange = e => {
    // console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio value={'small'}>Small</Radio>
          <Radio value={'default'}>Default</Radio>
          <Radio value={'large'}>Large</Radio>
        </Radio.Group>
        <Button type='primary' size={this.state.value}>
          Primary
        </Button>
        <Button size={this.state.value}>Default</Button>
        <Button type='dashed' size={this.state.value}>
          Dashed
        </Button>
        <Button type='danger' size={this.state.value}>
          Danger
        </Button>
        <Button type='link' size={this.state.value}>
          Link
        </Button>
      </div>
    );
  }
}

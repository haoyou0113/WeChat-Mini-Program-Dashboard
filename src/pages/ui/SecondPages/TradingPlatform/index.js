import React, { Component } from 'react';
import { Table, Icon, Switch, Radio, Form, Divider, Button } from 'antd';
import { Input, InputNumber, Popconfirm } from 'antd';
import CommonEdit from '../EditComponent';
import ReactDOM from 'react-dom';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>
  },

  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Action 一 {record.name}</a>
        <Divider type='vertical' />
        <a>Delete</a>

        <Divider type='vertical' />
        <a>Publish</a>
        <Divider type='vertical' />
      </span>
    )
  }
];
// const data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push({
//     key: i,
//     title: 'John Brown',
//     content: `New York No. ${i} Lake Park`
//   });
// }

const expandedRowRender = data => <CommonEdit />;
const title = () => '小程序';
const showHeader = true;
const footer = () => '小程序';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

export default class TradingPlatform extends React.Component {
  //   state = {
  //     bordered: false,
  //     loading: false,
  //     pagination,
  //     size: 'default',
  //     expandedRowRender,
  //     title,
  //     showHeader,
  //     footer,
  //     rowSelection: {},
  //     scroll: undefined,
  //     hasData: true,
  //     tableLayout: undefined
  //   };
  constructor(props) {
    super(props);
    this.state = {
      bordered: false,
      loading: false,
      pagination,
      size: 'default',
      expandedRowRender,
      title,
      showHeader,
      footer,
      rowSelection: {},
      scroll: undefined,
      hasData: true,
      tableLayout: undefined,
      data: [
        {
          key: 'John',
          title: 'John Brown',
          content: `John Brown111`
        }
      ]
    };
  }
  handleDataChange = hasData => {
    this.setState({ hasData });
  };
  handleAddNew = () => {
    const { data } = this.state;
    data.push({ key: 'John', title: 'John Brown', content: `John Brown111` });
    this.setState({ data });
  };
  render() {
    const { state } = this;
    console.log(state.hasData);
    return (
      <div>
        <Form.Item label='AddNew'>
          <Button type='primary' onClick={this.handleAddNew}>
            handleAddNew
          </Button>
        </Form.Item>
        <Table
          {...this.state}
          columns={columns.map(item => ({ ...item, ellipsis: state.ellipsis }))}
          dataSource={state.hasData ? this.state.data : null}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Card, Table } from 'antd';

export default class BasicTable extends Component {
  state = {};
  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        userName: 'Leon',
        sex: 'male',
        state: '1',
        habit: 'Soccer',
        birthday: '7-8-1992',
        address: '60 roma St',
        weakUpTime: '9am'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: 'male',
        state: '1',
        habit: 'Soccer',
        birthday: '7-8-1992',
        address: '60 roma St',
        weakUpTime: '9am'
      },
      {
        id: '2',
        userName: 'Loveive',
        sex: 'male',
        state: '1',
        habit: 'Soccer',
        birthday: '7-8-1992',
        address: '60 roma St',
        weakUpTime: '9am'
      }
    ];
    this.setState({
      dataSource
    });
  }
  render() {
    const columns = [
      { title: 'id', dataIndex: 'id' },
      { title: 'UserName', dataIndex: 'userName' },
      { title: 'Gender', dataIndex: 'sex' },
      { title: 'State', dataIndex: 'state' },
      { title: 'Habit', dataIndex: 'habit' },
      { title: 'Birthday', dataIndex: 'birthday' },
      { title: 'Address', dataIndex: 'address' },
      { title: 'WeakUpTime', dataIndex: 'weakUpTime' }
    ];
    return (
      <div>
        <Card title='BasicTable'>
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
          ></Table>
        </Card>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Button, Card, Tabs, message, Icon } from 'antd';
import './index.less';
const { TabPane } = Tabs;

export default class Tab extends Component {
  newTabIndex = 0;
  componentWillMount() {
    const panes = [
      { title: 'Tab1', content: 'Tab1', key: '1' },
      { title: 'Tab2', content: 'Tab2', key: '2' },
      { title: 'Tab3', content: 'Tab3', key: '3' }
    ];
    this.setState({
      activeKey: panes[0].key,
      //设置默认激活
      panes
    });
  }
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  callback = key => {
    message.info(' Hi you picked a tab' + key);
  };
  onChange = activeKey => {
    this.setState({ activeKey });
  };
  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  render() {
    return (
      <div>
        <Card title='Tab' className='card-wrap'>
          <Tabs defaultActiveKey='1' onChange={this.callback}>
            <TabPane tab='Tab 1' key='1'>
              Tab 1
            </TabPane>
            <TabPane tab='Tab 2' key='2'>
              Tab 2
            </TabPane>
            <TabPane tab='Tab 3' key='3'>
              Tab 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title='Tab with picture' className='card-wrap'>
          <Tabs
            activeKey={this.state.activeKey}
            type='editable-card'
            onChange={this.onChange}
            onEdit={this.onEdit}
          >
            {this.state.panes.map(panes => {
              return (
                <TabPane tab={panes.title} key={panes.key}>
                  {panes.content}
                </TabPane>
              );
            })}
          </Tabs>
        </Card>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from './../../config/menuConfig';

import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    });
  }
  // menu render
  renderMenu = data => {
    console.log(data);
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.category} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.category} key={item.key}>
          <NavLink to={item.key}> {item.category} </NavLink>
        </Menu.Item>
      );
    });
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className='navleft'>
        <div className='logo'>
          <img src='/asset/logo.png' alt='' />
          {/* <img src='/my-app/public/logo.png' alt='' /> */}
          <h1>Dashboard</h1>
        </div>
        <Menu theme='dark'>{this.state.menuTreeNode}</Menu>
      </div>
    );
  }
}

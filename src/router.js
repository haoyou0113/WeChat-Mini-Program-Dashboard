import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Nomatch from './pages/ui/nomatch';
import NewsAdv from './pages/ui/newAdv';
import TradingPlatform from './pages/ui/SecondPages/TradingPlatform';
import Carousel from './pages/ui/carousel';

import Home from './pages/home';

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Login} />
          <Route
            path='/'
            render={() => (
              <Admin>
                <Switch>
                  {/* <Route path="/home" component={Home} /> */}
                  {/* <Route path='/admin/ui' component={Home} /> */}
                  <Route path='/admin/ui/carousel' component={Carousel} />
                  <Route path='/admin/ui/newsAdv' component={NewsAdv} />
                  <Route path='/admin/ui/newsAdv' component={NewsAdv} />
                  <Route
                    path='/admin/SubMenu/tradingPlatform'
                    component={TradingPlatform}
                  />
                  <Route path='/admin/ui/newsAdv' component={NewsAdv} />
                  {/* <Route path='/admin/ui/newAdv' component={Test} /> */}

                  <Route component={Nomatch} />
                </Switch>
              </Admin>
            )}
          />
          {/* <Route path='/order/detail' component={Admin} /> */}
        </App>
      </HashRouter>
    );
  }
}

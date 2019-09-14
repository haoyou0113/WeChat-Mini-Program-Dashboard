import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';
import Utils from './../utils/utils';
export default class Axios {
  static requestList(_this, url, params, isMock) {
    var data = {
      params: params,
      isMock
    };
    this.ajax({
      url,
      data
    }).then(data => {
      if (data && data.result) {
        let list = data.result.item_list.map((item, index) => {
          item.key = index;
          return item;
        });
        _this.setState({
          list,
          pagination: Utils.pagination(data, current => {
            _this.params.page = current;
            _this.requestList();
          })
        });
      }
    });
  }
}

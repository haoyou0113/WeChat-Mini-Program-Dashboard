import React, { Component } from 'react';
import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  message,
  InputNumber
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class FormLogin extends Component {
  render() {
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { xs: 24, sm: 4 },
      wrapperCol: { xs: 24, sm: 12 }
    };
    const RadioGroup = Radio.Group;
    return (
      <div>
        <Card title='Register Form'>
          <Form layout='horizontal'>
            <FormItem label='Username' {...formItemLayout}>
              {}
              {getFieldDecorator('userName', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'User name is required'
                  },
                  {
                    min: 5,
                    max: 10,
                    message: 'invalid Length'
                  },
                  {
                    pattern: new RegExp('^\\w+$', 'g'),
                    message: 'Username must be letters and numbers'
                  }
                ]
              })(
                <Input
                  prefix={<Icon type='user' />}
                  placeholder='Please Input username'
                />
              )}
            </FormItem>
            <FormItem label='PassWord' {...formItemLayout}>
              {getFieldDecorator('userPwd', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'PassWord is required'
                  }
                ]
              })(
                <Input
                  prefix={<Icon type='lock' />}
                  type='password'
                  placeholder='Please Input PassWord'
                />
              )}
            </FormItem>
            <FormItem label='Gender' {...formItemLayout}>
              {getFieldDecorator('gender', {
                initialValue: '1',
                rules: [
                  {
                    required: true,
                    message: 'Gender is required'
                  }
                ]
              })(
                <RadioGroup>
                  <Radio value='1'>Male</Radio>
                  <Radio value='2'>Female</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label='Age' {...formItemLayout}>
              {getFieldDecorator('age', {
                initialValue: '18',
                rules: [
                  {
                    required: true,
                    message: 'Age is required'
                  }
                ]
              })(<InputNumber />)}
            </FormItem>
            <FormItem label='State' {...formItemLayout}>
              {getFieldDecorator('state', {
                initialValue: '1',
                rules: [
                  {
                    required: true,
                    message: 'State is required'
                  }
                ]
              })(
                <Select>
                  <Option value='1'>123</Option>
                  <Option value='2'>345</Option>
                  <Option value='3'>789</Option>
                  <Option value='4'>321</Option>
                  <Option value='5'>543</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label='Hobbits' {...formItemLayout}>
              {getFieldDecorator('hobbits', {
                initialValue: ['1', '2'],
                rules: [
                  {
                    required: true,
                    message: 'Hobbits is required'
                  }
                ]
              })(
                <Select mode='multiple'>
                  <Option value='1'>Soccer</Option>
                  <Option value='2'>basketball</Option>
                  <Option value='3'>Pool</Option>
                  <Option value='4'>Football</Option>
                  <Option value='5'>Baseball</Option>
                </Select>
              )}
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormLogin);

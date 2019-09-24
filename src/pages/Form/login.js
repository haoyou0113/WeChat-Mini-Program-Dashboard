import React, { Component } from 'react';
import { Card, Form, Input, Button, Icon, message, Checkbox } from 'antd';
const FormItem = Form.Item;
class FormLogin extends Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.userName} Congratulations! your password is ${userInfo.userPwd}`
        );
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card title='Login Inline Form'>
          <Form layout='inline'>
            <FormItem>
              <Input placeholder='Please input username' />
            </FormItem>
            <FormItem>
              <Input placeholder='Please input Password' />
            </FormItem>
            <FormItem>
              <Button type='primary'>Submit</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title='Login Horizontal Form' style={{ marginTop: 10 }}>
          <Form style={{ width: 300 }}>
            <FormItem>
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
            <FormItem>
              {getFieldDecorator('userPwd', {
                initialValue: '',
                rules: []
              })(
                <Input
                  prefix={<Icon type='lock' />}
                  type='password'
                  placeholder='Please Input PassWord'
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false
              })(<Checkbox>Remember </Checkbox>)}
              <a href='#' style={{ float: 'right' }}>
                Forgot Password
              </a>
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.handleSubmit}>
                Submit
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormLogin);

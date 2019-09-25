import React, { Component } from 'react';
import moment from 'moment';
import './index.less';
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
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));
    message.success(
      `${userInfo.userName} Congratulations! your password is ${userInfo.userPwd}`
    );
  };
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  state = {
    loading: false
  };
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );
    const offsetLayout = {
      wrapperCol: { xs: 24, sm: { span: 12, offset: 4 } }
    };
    const { imageUrl } = this.state;
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    const TextArea = Input.TextArea;
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
                  <Option value='1'>Soccer</Option>
                  <Option value='2'>Basketball</Option>
                  <Option value='3'>Pool</Option>
                  <Option value='4'>Football</Option>
                  <Option value='5'>Baseball</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label='Habits' {...formItemLayout}>
              {getFieldDecorator('habits', {
                initialValue: ['1', '2'],
                rules: [
                  {
                    required: true,
                    message: 'Habits is required'
                  }
                ]
              })(
                <Select mode='multiple'>
                  <Option value='1'>Soccer</Option>
                  <Option value='2'>Basketball</Option>
                  <Option value='3'>Pool</Option>
                  <Option value='4'>Football</Option>
                  <Option value='5'>Baseball</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label='Married' {...formItemLayout}>
              {getFieldDecorator('isMarried', {
                initialValue: 'checked'
              })(<Switch />)}
            </FormItem>
            <FormItem label='Birthday' {...formItemLayout}>
              {getFieldDecorator('birthday', {
                initialValue: moment('1992-08-07')
              })(<DatePicker />)}
              {/* moment is third party method  */}
            </FormItem>
            <FormItem label='Address' {...formItemLayout}>
              {getFieldDecorator('address', {
                initialValue: ''
              })(<TextArea />)}
            </FormItem>
            <FormItem label='WeakUpTime' {...formItemLayout}>
              {getFieldDecorator('weakuptime', {
                initialValue: ''
              })(<TimePicker showTime format='YYYY-MM-DD' />)}
            </FormItem>
            <FormItem label='UserImages' {...formItemLayout}>
              {getFieldDecorator('userImage', {
                initialValue: ''
              })(
                <Upload
                  name='avatar'
                  listType='picture-card'
                  className='avatar-uploader'
                  showUploadList={false}
                  action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                  beforeUpload={this.beforeUpload}
                  onChange={this.handleChange}
                >
                  {' '}
                  {this.state.imageUrl ? (
                    <img
                      src={imageUrl}
                      alt='avatar'
                      style={{ width: '100%' }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              {getFieldDecorator('Contrast')(
                <Checkbox title='User Contrast'>
                  I have read <a href=''>Contrast</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type='primary' onClick={this.handleSubmit}>
                Register
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormLogin);

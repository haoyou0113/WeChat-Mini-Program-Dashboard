import React, { Component } from 'react';

import './index.less';
import {
  Carousel,
  Card,
  Form,
  Button,
  Input,
  Radio,
  Select,
  Upload,
  Icon,
  message
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
class Carousels extends Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));
    message.success(`${userInfo.userName} 修改已生效`);
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
  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
    });
  };
  onchange = (a, b, c) => {
    console.log(a, b, c);
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
        <Card title='Sliders images' className='slider-wrap'>
          <Carousel autoplay effect='fade'>
            <div>
              <img
                src='/carousel-img/carousel-1.jpg'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <img src='/carousel-img/carousel-2.jpg' alt='' />
            </div>
            <div>
              <img src='/carousel-img/carousel-3.jpg' alt='' />
            </div>
          </Carousel>
          <Form layout='inline' style={{ marginTop: 20 }}>
            <FormItem label='图片' {...formItemLayout}>
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
            {/* <FormItem label='标题' {...formItemLayout}>
              {}
              {getFieldDecorator('Title', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: '请填写标题'
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
              })(<Input placeholder='请填入标题' />)}
            </FormItem> */}
            <Form.Item label='图片位置' hasFeedback>
              {getFieldDecorator('imageOrder', {
                rules: [{ required: true, message: '请选择图片顺序' }]
              })(
                <Select placeholder='请选择图片顺序'>
                  <Option value='1'>1</Option>
                  <Option value='2'>2</Option>
                </Select>
              )}
            </Form.Item>
            <FormItem {...offsetLayout}>
              <Button type='primary' onClick={this.handleSubmit}>
                发布
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(Carousels);

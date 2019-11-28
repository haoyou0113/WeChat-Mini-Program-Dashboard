import React, { Component } from 'react';

import { Upload, Icon, Modal, Input, Form, Button } from 'antd';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class CommonEdit extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error'
      }
    ],
    value: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  handleCancel = () => this.setState({ previewVisible: false });
  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const formItemLayout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 24 }
    };
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    const { previewVisible, previewImage, fileList, value } = this.state;

    return (
      <div className='clearfix'>
        <Form action=''>
          <Form.Item {...formItemLayout} label='Title'>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please input title'
                }
              ]
            })(<Input placeholder='Please input title' />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label='Content'>
            {getFieldDecorator('content', {
              rules: [
                {
                  required: true,
                  message: 'Please input your content'
                }
              ]
            })(
              <TextArea
                value={value}
                onChange={this.onChange}
                placeholder='Controlled autosize'
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            )}
          </Form.Item>
          <Form.Item label='Dragger'>
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile
            })(
              <Upload.Dragger name='files' action='/upload.do'>
                <p className='ant-upload-drag-icon'>
                  <Icon type='inbox' />
                </p>
                <p className='ant-upload-text'>
                  Click or drag file to this area to upload
                </p>
                <p className='ant-upload-hint'>
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button
              type='primary'
              htmlType='submit'
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>

        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleSubmit}
        >
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
const WrappedDemo = Form.create({ name: 'validate_other' })(CommonEdit);
export default WrappedDemo;

import React, { Component } from 'react';
import moment from 'moment';
import './index.less';
import {
  Menu,
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
const { SubMenu } = Menu;
class NewsAdv extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      list: [
        '新闻广告 1',
        '新闻广告 2',
        '新闻广告 3',
        '新闻广告 4',
        '新闻广告 5',
        '新闻广告 6',
        '新闻广告 7',
        '新闻广告 8',
        '新闻广告 9',
        '新闻广告 10'
      ],
      display: 'none',
      mode: 'inline',
      theme: 'light'
    };
    // renderList = data => {
    //   return data.map(item => {
    //     return (
    //       <Menu.Item title={item.category} key={item.key}>
    //         <NavLink to={item.key}> {item.category} </NavLink>
    //       </Menu.Item>
    //     );
    //   });
    // };
  }
  handleClickDis = index => {
    let { display } = this.state;
    console.log(display);
    if (display == 'none') {
      display = 'block';
    } else {
      display = 'none';
    }
    // display = 'none' ? 'block' : 'none';
    this.setState({ display });
    console.log(display);
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
        <Menu
          style={{}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <SubMenu
            key='sub1'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 1</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 2</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub3'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 3</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub4'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 4</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub5'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 5</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub6'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 6</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub7'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 7</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub8'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 8</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub9'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 9</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
            key='sub10'
            title={
              <span>
                <Icon type='setting' />
                <span>新闻广告 10</span>
              </span>
            }
          >
            <Form layout='horizontal'>
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
              <FormItem label='标题' {...formItemLayout}>
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
              </FormItem>
              <FormItem label='预览简介' {...formItemLayout}>
                {getFieldDecorator('pre-description', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '请填入预览简介'
                    }
                  ]
                })(<Input type='text' placeholder='请填入预览简介' />)}
              </FormItem>
              <FormItem label='类型' {...formItemLayout}>
                {getFieldDecorator('type', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: 'Type is required'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='1'>广告</Radio>
                    <Radio value='2'>新闻</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem label='标签' {...formItemLayout}>
                {getFieldDecorator('label', {
                  initialValue: ['1', '2'],
                  rules: [
                    {
                      required: true,
                      message: 'Habits is required'
                    }
                  ]
                })(
                  <Select mode='multiple'>
                    <Option value='1'>娱乐</Option>
                    <Option value='2'>政治</Option>
                    <Option value='3'>教育</Option>
                    <Option value='4'>移民</Option>
                    <Option value='5'>军事</Option>
                  </Select>
                )}
              </FormItem>

              <FormItem {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>
                  发布
                </Button>
              </FormItem>
            </Form>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default Form.create()(NewsAdv);

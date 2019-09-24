import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import './index.less';

export default class Carousels extends Component {
  onchange = (a, b, c) => {
    console.log(a, b, c);
  };
  render() {
    return (
      <div>
        <Card title='Carousel' className='card=wrap'>
          <Carousel afterChange={this.onChange} autoplay={true}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Card>
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
        </Card>
      </div>
    );
  }
}

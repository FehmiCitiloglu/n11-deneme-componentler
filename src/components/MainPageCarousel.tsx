import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export interface Props {
  slides: {
    image?: string;
    imageAlt: string;
    url?: string;
  }[];
}

const mockSlides = [
  {
    image:
      'https://n11scdn.akamaized.net/a1/720_400/21/10/26/83/94/87/74/55/82/85/84/72/85574930100094324595.jpg',
    imageAlt: 'Sağlık & Bakım',
    title: 'Sağlık & Bakım',
  },
];

export const MainPageCarousel = (props: Props) => {
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <RightOutlined />
      <Carousel autoplay effect="fade">
        {props.slides.map((slide: any) => {
          <div key={slide.title}>
            <img src={slide.image} alt={slide.imageAlt} />
            <h3 style={contentStyle}>{slide.title}</h3>
            <button>{slide.buttonText}</button>
          </div>;
        })}
      </Carousel>
      <LeftOutlined />
    </div>
  );
};

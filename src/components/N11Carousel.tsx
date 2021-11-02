import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import N11Button from "./UI/N11Button";

export interface Props {
  slides: {
    image?: string;
    imageAlt?: string;
    url?: string;
    buttonText?: string;
    isArrowGonnaShown: boolean;
  }[];
}

export const N11Carousel = (props: Props) => {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <RightOutlined onClick={() => {}} />
      <Carousel
        autoplay
        effect="fade"
        style={{
          width: "45rem",
          height: "30rem",
        }}
      >
        {props.slides.map((slide: any) => (
          <div key={slide.title}>
            <img src={slide.image} alt={slide.imageAlt} />
            <h3 style={contentStyle}>{slide.title}</h3>
            <N11Button isArrowShown={slide.isArrowGonnaShown}>
              {slide.buttonText}
            </N11Button>
          </div>
        ))}
      </Carousel>
      <LeftOutlined />
    </div>
  );
};

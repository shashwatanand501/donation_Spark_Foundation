import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(#403B4A, #E7E9BB);
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>We Donate For these issue</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="About 70 fires have sprouted up at eastern India’s Jharia coal fields, which cover more than 100 square miles and have been mined since the late 1800s."
            name="Fossil Fire"
            image="avatar-1"
          />

          <Card
            text="Two-thirds of people in India live in poverty: 68.8% of the Indian population lives on less than $2 a day. Over 30% even have less than $1.25 per day available "
            name="Poverty"
            image="avatar-2"
          />

          <Card
            text="According to FAO estimates in 'The State of Food Security and Nutrition in the World, 2020 report, 189.2 million people are undernourished in India. By this measure 14% of the population is undernourished in India."
            name="Starvation "
            image="avatar-3"
          />

          <Card
            text="India faced 22 major droughts between 1871 and 2002. The drought of 1987 was perhaps the worst drought of the last century, with an overall rainfall deficit of 19 per cent. "
            name="Drought "
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;

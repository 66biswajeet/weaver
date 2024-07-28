import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const CarouselContainer = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  z-index: 1;
  top: 60px;

  @media (max-width: 600px) {
    height: 400px;
  }
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const SliderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;
  max-width: 50%;

  @media (max-width: 992px) {
    left: 5%;
    max-width: 70%;
  }

  @media (max-width: 600px) {
    left: 5%;
    max-width: 90%;
  }
`;

const SliderTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const SliderDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const SliderButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const PayButton = styled(Button)`
  background-color: #f44336;
`;

const ReadButton = styled(Button)`
  background-color: #26a8b9;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
`;

const Indicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/campaignDocuments%2F6.jpg?alt=media&token=a1b4010a-cb25-4380-aa22-0708fd747ce6",
      title: "Provide Education in Rural area",
      description: "Be a part in taking the education one step forward",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/campaignDocuments%2F5.jpg?alt=media&token=0953f0dc-ae20-4c40-8186-6063f8804761",
      title: "Hunger Will be Quenched",
      description: "Unlock the potential of humanity.",
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <CarouselContainer>
      <AnimatePresence initial={false}>
        <Slide
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SlideImage
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
          <GradientOverlay />
          <SliderContent>
            <SliderTitle>{slides[currentSlide].title}</SliderTitle>
            <SliderDescription>
              {slides[currentSlide].description}
            </SliderDescription>
            <SliderButtons>
              <PayButton href="#">Pay Now</PayButton>
              <ReadButton href="/blogpost">Read More</ReadButton>
            </SliderButtons>
          </SliderContent>
        </Slide>
      </AnimatePresence>
      <Indicators>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

export default Section1;

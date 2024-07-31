import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #d2f5fa;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 10px;

  &:last-child {
    margin-top: -50px;
    margin-right: -30px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;

    &:last-child {
      margin-top: -30px;
      margin-right: 0;
    }
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;

    .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background: #fff;

      &.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;

        &::before {
          position: absolute;
          content: "";
          top: -0.29rem;
          right: 0.0625rem;
          width: 0.625rem;
          height: 0.625rem;
          border-top: 0.125rem solid #fff;
          border-right: 0.125rem solid #fff;
          transform: rotate(45deg);
        }
      }
    }
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover {
    .circle {
      width: 100%;
    }

    .circle .icon.arrow {
      background: #fff;
      transform: translate(1rem, 0);
    }

    .button-text {
      color: #fff;
    }
  }
`;

const Fund = () => {
  return (
    <Container>
      <TextContent>
        <Title>Raise funds for your cause!</Title>
        <Subtitle>
          Onboard on Give and create impact by raising funds for your
          initiatives
        </Subtitle>
        <StyledButton className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Enroll NGO</span>
        </StyledButton>
      </TextContent>
      <ImagesContainer>
        <Image
          src="https://sathisewa.vercel.app/assets/1-M1WQ_Z8o.webp"
          alt="Children playing"
        />
      </ImagesContainer>
    </Container>
  );
};

export default Fund;

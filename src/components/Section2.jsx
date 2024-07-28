import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const CheckIcon = styled.span`
  color: #ff4500;
  font-size: 24px;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Section2 = () => (
  <Container>
    <Title>Give Monthly</Title>
    <Subtitle>Sign up once and invest in India's future every month</Subtitle>
    <FeaturesContainer>
      <Feature>
        <CheckIcon>✓</CheckIcon>
        <FeatureTitle>Real Changes</FeatureTitle>
        <FeatureDescription>
          Your choice to give monthly will make a long-lasting impact
        </FeatureDescription>
      </Feature>
      <Feature>
        <CheckIcon>✓</CheckIcon>
        <FeatureTitle>Regular Changes</FeatureTitle>
        <FeatureDescription>
          Learn how you are changing lives through our reports
        </FeatureDescription>
      </Feature>
      <Feature>
        <CheckIcon>✓</CheckIcon>
        <FeatureTitle>Trusted Giving</FeatureTitle>
        <FeatureDescription>
          Every beneficiary you support is under the care of GiveAssured
          nonprofits
        </FeatureDescription>
      </Feature>
    </FeaturesContainer>
  </Container>
);

export default Section2;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #26a8b9;
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 800;
`;

const Subtitle = styled.h2`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StatBox = styled.div`
  flex-basis: calc(25% - 20px);
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-basis: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;

const Icon = styled.div`
  color: #ff0000;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Number = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Label = styled.div`
  font-size: 1rem;
  color: #666;
`;

const Donation = () => {
  return (
    <Container>
      <Title>Charitable Foundation</Title>
      <Subtitle>India's trusted online donation platform</Subtitle>
      <StatsContainer>
        <StatBox>
          <Icon>👥</Icon>
          <Number>1,000+</Number>
          <Label>Donors</Label>
        </StatBox>
        <StatBox>
          <Icon>❤️</Icon>
          <Number>5K+</Number>
          <Label>Lives Impacted</Label>
        </StatBox>
        <StatBox>
          <Icon>✅</Icon>
          <Number>100+</Number>
          <Label>Verified Non Profits</Label>
        </StatBox>
        <StatBox>
          <Icon>🏆</Icon>
          <Number>1+</Number>
          <Label>Corporate Partners</Label>
        </StatBox>
      </StatsContainer>
    </Container>
  );
};

export default Donation;

import React, { useState } from "react";
import styled from "styled-components";

const CampaignSection = styled.section`
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #ff0000;
  font-size: 24px;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CauseButton = styled.button`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "#147885" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;

  &:hover {
    background-color: #147885;
    color: white;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const causes = [
  { name: "ALL", icon: "🎁" },
  { name: "HUNGER", icon: "🍲" },
  { name: "ANIMALS", icon: "🐾" },
  { name: "CHILDREN", icon: "👶" },
  { name: "EDUCATION", icon: "🎓" },
  { name: "EMERGENCY", icon: "🚑" },
  { name: "DISABILITY", icon: "♿" },
];

const Campaign = () => {
  const [activeCause, setActiveCause] = useState("ALL");

  return (
    <CampaignSection>
      <Title>OUR CAMPAIGNS</Title>
      <SubTitle>Causes you can support</SubTitle>
      <ButtonContainer>
        {causes.map((cause) => (
          <CauseButton
            key={cause.name}
            active={activeCause === cause.name}
            onClick={() => setActiveCause(cause.name)}
          >
            <Icon>{cause.icon}</Icon>
            {cause.name}
          </CauseButton>
        ))}
      </ButtonContainer>
    </CampaignSection>
  );
};

export default Campaign;

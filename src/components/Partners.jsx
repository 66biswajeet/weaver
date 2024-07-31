import React, { useState } from "react";
import styled from "styled-components";

const CampaignSection = styled.section`
  padding: 21px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #26a8b9;
  font-size: 60px;
  margin-bottom: 10px;
  font-weight: 800;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 400;
  margin: 25px 0 50px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
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
  border: 0.2px solid #e0e0e0;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "#147885" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 30px;
  margin-bottom: 30px;

  &:hover {
    scale: 90%;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 8px;
`;

const IconImage = styled.img`
  width: 120px; /* Adjust width as needed */
  height: 120px; /* Adjust height as needed */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const causes = [
  {
    name: "ALL",
    icon: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/ngoDocuments%2F2.jpg?alt=media&token=9f25e770-caf8-4807-b7eb-3ae5878fccads",
  },
  {
    name: "HUNGER",
    icon: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/ngoDocuments%2F5.jpg?alt=media&token=026cd825-d521-4cd2-8f27-412c6cc58b64",
  },
  {
    name: "ANIMALS",
    icon: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/ngoDocuments%2F7.jpeg?alt=media&token=96c1f38b-158b-43e1-9563-3e1c54ed23af",
  },
  {
    name: "CHILDREN",
    icon: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/ngoDocuments%2F1.jpeg?alt=media&token=18a7fee3-1348-4f71-b265-2cd5a2b63ee1",
  },
  {
    name: "EDUCATION",
    icon: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/ngoDocuments%2F6.jpeg?alt=media&token=9511a431-6eaa-457c-b81a-070184cf2c69",
  },
];

const Partners = () => {
  const [activeCause, setActiveCause] = useState("ALL");

  return (
    <CampaignSection>
      <Title>Our trusted NGO partners</Title>
      <SubTitle>
        We have been raising funds for credible nonprofits for 20+ years
      </SubTitle>
      <ButtonContainer>
        {causes.map((cause) => (
          <CauseButton
            key={cause.name}
            active={activeCause === cause.name}
            onClick={() => setActiveCause(cause.name)}
          >
            {/* <Icon>{cause.icon}</Icon> */}
            <IconContainer>
              <IconImage src={cause.icon} alt="icon" />
            </IconContainer>
          </CauseButton>
        ))}
      </ButtonContainer>
    </CampaignSection>
  );
};

export default Partners;

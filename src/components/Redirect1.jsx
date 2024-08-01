import React from "react";
import styled from "styled-components";
import Redsec2 from "./Redsec2";
import Freq from "./Freq";
import Sponser from "./Sponser";

const Container = styled.div`
  position: relative;
  width: 100%;
  ${"" /* max-width: 1200px; */}
  margin: 0 auto;
  height: 100vh;
  top: 10%;
  margin-top: 70px;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 380px;
  background-image: url("https://sathisewa.vercel.app/assets/2-u45EJj2j.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Card = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  ${"" /* max-width: 600px; */}
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 200;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 800;
  word-spacing: 8px;
`;

const Description = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 15px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Progress = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #b6d5d9;
  border-radius: 5px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const ShareButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Redirect1 = () => {
  return (
    <>
      <Container>
        <BackgroundImage />
        <Card>
          <Title>
            Sponsor a Meal for 10 Needy Patients in the Government Hospitals
          </Title>
          <Description>
            This meal contains Dal, Vegetable, Rice, and 5 chapatis, which will
            help the patients at public hospitals recover faster and avoid
            hunger.
          </Description>
          <ProgressBar>
            <Progress percentage={67} /> {/* Adjust based on actual progress */}
          </ProgressBar>
          <Stats>
            <span>₹235,000 Donated</span>
            <span>₹35000</span>
          </Stats>
          <Stats>
            <span>52,432+ Donors</span>
            <span>12 Days</span>
          </Stats>
          <ShareButtons>
            <ShareButton>in</ShareButton>
            <ShareButton>ig</ShareButton>
            <ShareButton>wa</ShareButton>
          </ShareButtons>
        </Card>
      </Container>
      <Redsec2 />
      <Freq />
      <Sponser />
    </>
  );
};

export default Redirect1;

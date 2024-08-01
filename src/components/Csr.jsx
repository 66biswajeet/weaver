import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

const RedText = styled.span`
  color: #4996ff;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #0dd4f0;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

const WhatWeDo = styled.section`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ServiceItem = styled.li`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
    border-radius: 2px solid red;
  }
`;

const ServiceIcon = styled.span`
  font-size: 1.5rem;
  color: #ff6b6b;
`;

const Csr = () => {
  return (
    <Container>
      <Section>
        <ImageContent>
          <img
            src="https://digisoft.in/assets/img/intro_images/partner-with-us.png"
            alt="People working together"
          />
        </ImageContent>
        <TextContent>
          <SectionTitle>Partner with us</SectionTitle>
          <Paragraph>
            Sathi Sewa Foundation empowers the new Bharat through quality
            education, mentorship, and healthcare. We save lives, support young
            entrepreneurs, provide free food, and combat illiteracy. At Sathi
            Sewa Foundation, we envision a Bharat where every individual has the
            opportunity to thrive and reach their full potential. We invite you
            to join us in our mission to empower the new Bharat and make a
            lasting impact on generations to come.
          </Paragraph>
          <Button>Contact us</Button>
        </TextContent>
      </Section>

      <WhatWeDo>
        <SectionTitle>What we do</SectionTitle>
        <ServicesList>
          <ServiceItem>
            <ServiceIcon>📚</ServiceIcon> Education
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>🌿</ServiceIcon> Nature
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>📖</ServiceIcon> Literacy
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>🏥</ServiceIcon> Healthcare
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>🔒</ServiceIcon> Cybersecurity
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>💼</ServiceIcon> Entrepreneurs
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>🏥</ServiceIcon> Entrepreneurs
          </ServiceItem>
        </ServicesList>
      </WhatWeDo>

      <Section>
        <TextContent>
          <SectionTitle>
            Our <RedText>Mission</RedText>
          </SectionTitle>
          <Paragraph>
            Sathi Sewa's mission is to shape a new India, providing
            opportunities for young minds to achieve their dreams. We aspire to
            build a safe, growing, and healthy nation. Join us in creating a
            brighter future for Bharat, where every youth's mission finds
            support and fulfillment.
          </Paragraph>

          <SectionTitle>
            Our <RedText>Vision</RedText>
          </SectionTitle>
          <Paragraph>
            Everyone has dreams, and we pave the path to turn those dreams into
            reality. Our vision is simple yet powerful: to empower dreamers.
            With quality support and guidance, we transform aspirations into
            achievements, creating a brighter and fulfilled future for all.
          </Paragraph>
        </TextContent>
        <ImageContent>
          <img
            src="https://sathisewa.vercel.app/assets/mission-_JE_Ej1E.jpg"
            alt="People climbing arrow"
          />
        </ImageContent>
      </Section>
    </Container>
  );
};

export default Csr;

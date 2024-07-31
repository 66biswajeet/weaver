import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.5;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfluencerGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const InfluencerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const InfluencerImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const InfluencerName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialRecognition = () => {
  const influencers = [
    {
      name: "Zayn Malik",
      image: "https://sathisewa.vercel.app/assets/1-XhC2V-Tr.webp",
    },
    {
      name: "Sidhu Moose Wala",
      image: "https://sathisewa.vercel.app/assets/2-NdAiWSuk.webp",
    },
    {
      name: "Sasha Malik",
      image: "https://sathisewa.vercel.app/assets/3-vtKzZeKJ.webp",
    },
    {
      name: "Rubina Dilaik",
      image: "https://sathisewa.vercel.app/assets/4-u9fadyse.jpg",
    },
  ];

  return (
    <Container>
      <Title>Social Recognition</Title>
      <Subtitle>
        Our unique model has been recognized by more than 10 social influencers.
        Some celebrities also came forward to provide a helping hand to those in
        need.
      </Subtitle>
      <InfluencerGrid>
        {influencers.map((influencer, index) => (
          <InfluencerCard key={index}>
            <InfluencerImage src={influencer.image} alt={influencer.name} />
            <InfluencerName>{influencer.name}</InfluencerName>
          </InfluencerCard>
        ))}
      </InfluencerGrid>
    </Container>
  );
};

export default SocialRecognition;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin: 60px auto;
  max-width: 100%;
  padding: 0 20px;
`;

const Card = styled(motion.div)`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const TaxBenefit = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #ff0000;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 12px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Stat = styled.span`
  font-size: 14px;
  color: #666;
`;

const ProgressBar = styled.div`
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  margin-bottom: 12px;
`;

const Progress = styled.div`
  height: 100%;
  width: 50%;
  background-color: #ffa500;
  border-radius: 2px;
`;

const Target = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

const DonateButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #26a8b9;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const Cardcomponent = () => {
  const blogPosts = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/monthlyCampaignDocuments%2F4.png?alt=media&token=b9f8577c-0edd-4a58-ba82-7e2ae5f1c669",
      title: "Exciting New Tech",
      stat1: 542,
      stat2: 158,
      target: "Target: 0 left out of 80000",
      description:
        "Discover the latest breakthroughs shaping the future of technology  insightful post.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/monthlyCampaignDocuments%2Fophan-img.jpg?alt=media&token=fa39394e-dbde-4af7-a470-777d9ab87f80",
      title: "Exciting New Tech",
      stat1: 542,
      stat2: 158,
      target: "Target: 0 left out of 80000",
      description:
        "Discover the latest breakthroughs shaping the future of technology  insightful post.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/monthlyCampaignDocuments%2F3.png?alt=media&token=e5dbf9c1-27fc-47e7-a141-67cfba67fa0e",
      title: "Exciting New Tech",
      stat1: 542,
      stat2: 158,
      target: "Target: 0 left out of 80000",
      description:
        "Discover the latest breakthroughs shaping the future of technology  insightful post.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/bharat-shakti-foundation.appspot.com/o/monthlyCampaignDocuments%2F3.png?alt=media&token=e5dbf9c1-27fc-47e7-a141-67cfba67fa0e",
      title: "Exciting New Tech",
      stat1: 542,
      stat2: 158,
      target: "Target: 0 left out of 80000",
      description:
        "Discover the latest breakthroughs shaping the future of technology  insightful post.",
    },
  ];

  return (
    <CardContainer>
      {blogPosts.map((post, index) => (
        <Card
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div style={{ position: "relative" }}>
            <Image src={post.img} alt="Child holding food packet" />
            <TaxBenefit>Tax Benefit</TaxBenefit>
          </motion.div>
          <Content>
            <Title>{post.title}</Title>
            <Stats>
              <Stat>{post.stat1}</Stat>
              <Stat>{post.stat2}</Stat>
            </Stats>
            <ProgressBar>
              <Progress />
            </ProgressBar>
            <Target>{post.target}</Target>
            <Link to="/redirect" >
            <DonateButton >Donate Monthly</DonateButton>
            </Link>
          </Content>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Cardcomponent;

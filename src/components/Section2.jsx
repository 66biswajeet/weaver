import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 50px;
`;

const Title = styled(motion.h1)`
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeaturesContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Feature = styled(motion.div)`
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

const CheckIcon = styled(motion.span)`
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

const Section2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 10 },
    },
  };

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <Title variants={itemVariants}>Give Monthly</Title>
      <Subtitle variants={itemVariants}>
        Sign up once and invest in India's future every month
      </Subtitle>
      <FeaturesContainer>
        {[
          {
            title: "Real Changes",
            description:
              "Your choice to give monthly will make a long-lasting impact",
          },
          {
            title: "Regular Changes",
            description: "Learn how you are changing lives through our reports",
          },
          {
            title: "Trusted Giving",
            description:
              "Every beneficiary you support is under the care of GiveAssured nonprofits",
          },
        ].map((feature, index) => (
          <Feature key={index} variants={featureVariants}>
            <CheckIcon variants={iconVariants}>✓</CheckIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </Feature>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default Section2;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  column-gap: 40px;
  width: 100%;
`;

const Feature = styled(motion.div)`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  scale: 110%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const CheckIcon = styled(motion.span)`
  color: #26a8b9;
  font-size: 24px;
  font-weight: bold;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  font-weight: bold;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Section2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const features = [
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
  ];

  return (
    <Container
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Title variants={itemVariants}>Give Monthly</Title>
      <Subtitle variants={itemVariants}>
        Sign up once and invest in India's future every month
      </Subtitle>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <Feature key={index} variants={itemVariants}>
            <CheckIcon
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              ✓
            </CheckIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </Feature>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default Section2;

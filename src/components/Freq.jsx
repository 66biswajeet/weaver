import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 800;
`;

const FAQItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #b6d5d9;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #b6d5d9;
  cursor: pointer;
`;

const QuestionText = styled.span`
  font-weight: bold;
`;

const ToggleIcon = styled.span`
  font-size: 20px;
  color: ${(props) => (props.isOpen ? "#ff0000" : "#000000")};
`;

const Answer = styled.div`
  padding: 15px;
  background-color: #e6eced;
  border-top: 1px solid #e0e0e0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: all 0.5s;
`;

const Freq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is Sathi Sewa Foundation and what does it do?",
      answer:
        "Sathi Sewa Foundation, a non-profit organization, passionately champions local NGOs by elevating their fundraising efforts nationally and internationally. Our mission blends technology support, fostering CSR collaborations, and empowering NGOs to implement impactful initiatives. Together, we create positive change!",
    },
    {
      question: "How can I contribute to Sathi Sewa Foundation?",
      answer:
        "You can contribute to Sathi Sewa Foundation in various ways, including donations, volunteering, or partnering with us. Please contact us for more information.",
    },
    {
      question: "Where does the money donated to Sathi Sewa Foundation go?",
      answer:
        "Donations to Sathi Sewa Foundation go directly towards supporting our partner NGOs and their initiatives. We ensure transparency in all our financial operations.",
    },
    {
      question:
        "How can I partner with Sathi Sewa Foundation to raise donations?",
      answer:
        "To partner with us, please reach out through our contact page. We're always looking for collaborations that can help us make a bigger impact.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            <QuestionText>{item.question}</QuestionText>
            <ToggleIcon isOpen={openIndex === index}>
              {openIndex === index ? "-" : "+"}
            </ToggleIcon>
          </Question>
          <Answer isOpen={openIndex === index}>{item.answer}</Answer>
        </FAQItem>
      ))}
    </Container>
  );
};

export default Freq;

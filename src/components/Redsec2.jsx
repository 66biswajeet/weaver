import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#4267B2" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 20px;
`;

const DonorList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

const DonorItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;

const TransparencySection = styled.div`
  background-color: #d2f5fa;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const ImageSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 40px;
  padding: 20px 0;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderImage = styled.img`
  width: 500px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  scroll-snap-align: start;
`;

const Redsec2 = () => {
  const [activeTab, setActiveTab] = useState("Top Donors");
  const donors = [
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
    { name: "Martha Sandeep", amount: "₹1400" },
  ];

  return (
    <Container>
      <Title>Our Donors</Title>
      <TabContainer>
        <Tab
          active={activeTab === "Top Donors"}
          onClick={() => setActiveTab("Top Donors")}
        >
          Top Donors
        </Tab>
        <Tab
          active={activeTab === "Recent Donors"}
          onClick={() => setActiveTab("Recent Donors")}
        >
          Recent Donors
        </Tab>
      </TabContainer>
      <DonorList>
        {donors.map((donor, index) => (
          <DonorItem key={index}>
            <span>{donor.name}</span>
            <span>{donor.amount}</span>
          </DonorItem>
        ))}
      </DonorList>
      <TransparencySection>
        <h3>
          We Ensure <span style={{ color: "red" }}>100%</span> Transparency With
          Your Contribution
        </h3>
      </TransparencySection>
      <ImageSlider>
        <SliderImage
          src="https://sathisewa.vercel.app/assets/2-b5Pcx-sS.jpg"
          alt="Transparency 1"
        />
        <SliderImage
          src="https://sathisewa.vercel.app/assets/1-KiQVUMP9.webp"
          alt="Transparency 2"
        />
        <SliderImage
          src="https://sathisewa.vercel.app/assets/3-3r4-QTQG.webp"
          alt="Transparency 3"
        />
        <SliderImage
          src="https://sathisewa.vercel.app/assets/2-b5Pcx-sS.jpg"
          alt="Transparency 1"
        />
        <SliderImage
          src="https://sathisewa.vercel.app/assets/3-3r4-QTQG.webp"
          alt="Transparency 3"
        />
      </ImageSlider>
    </Container>
  );
};

export default Redsec2;

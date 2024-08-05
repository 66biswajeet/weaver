import React from "react";
import styled from "styled-components";
import Png from "../assets/weaver-qr.png";

const PaymentContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #4a4a4a;
  margin-bottom: 20px;
  font-weight: 600;
`;

const QRCodeContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const QRCode = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #777;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Instructions = styled.p`
  color: #666;
  margin-bottom: 15px;
`;

const FoundationName = styled.p`
  font-weight: bold;
  margin-top: 15px;
`;

const Disclaimer = styled.p`
  font-size: 0.8em;
  color: #999;
  margin-top: 20px;
`;

const Payment = () => {
  return (
    <PaymentContainer>
      <Title>Donate to Our Charitable Foundation</Title>
      <QRCodeContainer>
        <QRCode>
          <img src={Png} alt="QR Code"></img>
        </QRCode>
        <Instructions>Scan & Pay Using Your Preferred Payment App</Instructions>
      </QRCodeContainer>
      <Instructions>Your donation helps us make a difference.</Instructions>
      <FoundationName>Charitable Foundation Name</FoundationName>
      <Disclaimer>
        © 2024, All rights reserved, Charitable Foundation
      </Disclaimer>
    </PaymentContainer>
  );
};

export default Payment;

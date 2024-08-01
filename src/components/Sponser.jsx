import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  width: 80%;
  left: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SponsorInfo = styled.div`
  color: #147885;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Quantity = styled.div`
  width: 40px;
  height: 30px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DonateButton = styled.button`
  background-color: #147885;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const Sponser = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(0, prev - 1));

  return (
    <Container>
      <SponsorInfo>1584 sponsored, 416 still left</SponsorInfo>
      <Controls>
        <QuantityControl>
          <Button onClick={decrement}>-</Button>
          <Quantity>{quantity}</Quantity>
          <Button onClick={increment}>+</Button>
        </QuantityControl>
        <DonateButton>Donate Monthly</DonateButton>
      </Controls>
    </Container>
  );
};

export default Sponser;

import React from "react";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ProductList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const ProductItem = styled.li`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ff0000;
  margin-top: 10px;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Title>Welcome to our Shopping Site</Title>
      <ProductList>
        <ProductItem>
          <ProductImage src="https://example.com/product1.jpg" alt="Product 1" />
          <ProductName>Product 1</ProductName>
          <ProductPrice>$19.99</ProductPrice>
        </ProductItem>
        <ProductItem>
          <ProductImage src="https://example.com/product2.jpg" alt="Product 2" />
          <ProductName>Product 2</ProductName>
          <ProductPrice>$24.99</ProductPrice>
        </ProductItem>
        <ProductItem>
          <ProductImage src="https://example.com/product3.jpg" alt="Product 3" />
          <ProductName>Product 3</ProductName>
          <ProductPrice>$29.99</ProductPrice>
        </ProductItem>
      </ProductList>
    </HomePageWrapper>
  );
};

export default HomePage;

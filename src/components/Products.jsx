 import {popularProducts} from "../data"
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductItem = styled.li`
  margin: 10px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  max-width: 250px;
  max-height: 250px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  color: ${({ active }) => (active ? 'blue' : 'black')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`;


const Products = ({ sortOrder }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Define a function to sort products based on price
  const sortProducts = (products, order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    return sortedProducts;
  };

  // Apply sorting to the products and paginate them
  const sortedProducts = sortProducts(popularProducts, sortOrder);
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  // Total number of pages based on the number of products
  const totalPages = Math.ceil(popularProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <ProductList>
        {paginatedProducts.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.img} alt={`Product ${product.id}`} />
            <ProductPrice>Price: ${product.price}</ProductPrice>
          </ProductItem>
        ))}
      </ProductList>
      <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PageNumber
            key={index}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageNumber>
        ))}
      </Pagination>
    </Container>
  );
};

export default Products;


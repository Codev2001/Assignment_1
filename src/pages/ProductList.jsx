// import React from 'react'
// import Navbar from  "../components/Navbar"
// import styled from 'styled-components'
// import Announcement from  "../components/Announcement"
// import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
// import Footer from "../components/Footer";


// const Container = styled.div`

// `
// const Title = styled.h1`
// margin-left: 20px;
// margin-top: 20px;
// `

// const FilterContainer = styled.div`
// display: flex;
// justify-content: space-between;
// `


// const Filter = styled.div`
// margin: 20px;
// display: flex;
// `

// const FilterText =  styled.div`
// margin-right: 20px;
// font-size: 20px;
// font-weight: 600;
// `

// const Select =styled.select`
// margin:5px;
// apdding: 10px;
// `

// const Option = styled.option`

// `

// const ProductList = () => {
//   return (
//    <Container>
//     <Announcement/>
//     <Navbar/>
//     <Title>Dresses</Title>
//     <FilterContainer>
//         <Filter>
//             <FilterText>Filter Produts:</FilterText>
//             <Select>
//             <Option disabled selected>
//               Color
//             </Option>
//             <Option>White</Option>
//             <Option>Black</Option>
//             <Option>Red</Option>
//             <Option>Blue</Option>
//             <Option>Yellow</Option>
//             <Option>Green</Option>
//           </Select>
//           <Select>
//             <Option disabled selected>
//               Size
//             </Option>
//             <Option>XS</Option>
//             <Option>S</Option>
//             <Option>M</Option>
//             <Option>L</Option>
//             <Option>XL</Option>
//           </Select>
//         </Filter>
//         <Filter>
//         <FilterText>Sort Produts:</FilterText>
//         <Select>
//             <Option selected>Newest</Option>
//             <Option >Price (asc)</Option>
//             <Option >Price (desc)</Option>
//           </Select>
//         </Filter>
//     </FilterContainer>
//     <Products />
//       <Newsletter />
//       <Footer />
//    </Container>
//   )
// }

// export default ProductList

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { popularProducts } from '../data'; // Import the product data

const Container = styled.div``;
const Title = styled.h1`
  margin-left: 20px;
  margin-top: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
`;

const FilterText = styled.div`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  margin: 5px;
  padding: 10px;
`;

const Option = styled.option``;

const ProductList = () => {
  const [sortOrder, setSortOrder] = useState('asc'); // Initial sorting order (ascending or descending)
  const [selectedSort, setSelectedSort] = useState('newest'); // Initial selected sort criteria

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue);
    if (selectedValue === 'price_asc') {
      setSortOrder('asc');
    } else if (selectedValue === 'price_desc') {
      setSortOrder('desc');
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select value={selectedSort} onChange={handleSortChange}>
            <Option value="newest">Newest</Option>
            <Option value="price_asc">Price (Low to High)</Option>
            <Option value="price_desc">Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products sortOrder={sortOrder} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList
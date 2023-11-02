import styled from "styled-components"
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import {
    StarOutline
  } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";

const Container = styled.div``

const Details = styled.div`
padding: 50px;
display:flex;
`

const ImageContainer= styled.div`
flex:1;
`

const Image= styled.img`
width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`

const Brand = styled.h1`

`
const Desc = styled.h3`
opacity:.5;
`


const Rating = styled.div`
margin-top: 20px;
display: flex;
align-items:center;
margin-bottom: 25px;
`
const Price = styled.div`
display: flex;
`
const Button = styled.button`

`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
 
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin:5px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.div`
  margin-left: 10px;
  padding: 5px;
  display: flex;
`;
const FilterSizeOption = styled.button`
width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  `;

const AddContainer = styled.div`
margin-top: 100px;
display: flex;
flex:1;
width:50%;
height: 10vh;
`
const Button1 = styled.button`
flex:1;
padding-left: 20px;
background-color: #7FE23F;
color: white;
border: none;
width:200%;
margin-right: 10px;
border-radius: 15px;

&:hover{
    background-color: green;
}
`
const Button2 = styled.button`
flex:1;
border: gray;
border-radius: 15px;

&:hover{
    background-color: #f8f4f4;
}
`

const Product = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Details>
        <ImageContainer>
        <Image src="https://i.ibb.co/6rH7sK6/Gap-X-Frank-Ape-Adult-Graphic-T-Shirt-Pink-Standard.jpg"/>
        </ImageContainer>
      <InfoContainer>
        <Brand>DEVANG'S WARDROBE</Brand>
        <Desc>
            Men's T-Shirt
        </Desc>
        <Rating>
        4.2 <StarOutline style={{marginRight:"5px"}}/> |  2.5K Ratings
        </Rating>
        <Price>
            <Brand>Rs. 1499</Brand>
            <h1 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "gray", marginLeft: "10px",}}>
                Rs. 3000
            </h1>
            <h2 style={{color: "orange", marginTop:"5px", marginLeft: "10px"}}>
                (50% OFF)
            </h2>
        </Price>
        <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterSize>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button1>ADD TO CART</Button1>
            <Button2>BUY NOW</Button2>
          </AddContainer>
      </InfoContainer>
      
      </Details>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
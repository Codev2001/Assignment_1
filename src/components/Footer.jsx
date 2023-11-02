import styled from "styled-components"
import {
  Directions,
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
  }from "@material-ui/icons";
  import {mobile} from "../responsive"

const Container = styled.div`
display:flex;
${mobile({ flexDirections: "column"})}
`

const Left =  styled.div`
flex:1;
display:flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``;
const Desc =  styled.p`
margin:20px 0px;
`

const SocialConatiner =  styled.div`
display: flex;
`
const SocialIcon =  styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content: center;
margin-right:10px;
`

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none" })}
`

const Title =  styled.h1`
margin-bottom: 30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding:20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
diplay: flex;
align-items: center;
`

const Payment =  styled.img`
width: 50%;
`

 
const Footer = () => {
  return (
    <Container>
       <Left>
        <Logo>
            STYLE.in
        </Logo>
        <Desc>
        We here at STYLE.in put forward the best of fashion. 
         Our designers are working round the clock to create 
        revolutionary designs for u.
        </Desc>
        <SocialConatiner>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
        </SocialConatiner>
       </Left>
       <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
       </Center>
       <Right>
        <Title>Contact</Title>
        <ContactItem>
         <Room style={{marginRight:"5px"}}/> 122/2 Hauz Khas, Delhi
        </ContactItem>
        <ContactItem>
         <Phone style={{marginRight:"5px"}}/> +91 123XXXXX56
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"5px"}}/>contact@style.co.in
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
       </Right>
    </Container>
  )
}

export default Footer
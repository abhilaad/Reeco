import React from 'react'
import styled from "styled-components"
import reeco from "../assets/reeco.svg"
import caretDown from "../assets/caretDown.svg"

const NavWrapper = styled.nav`
background-color: #2E7D32;
width: "100%";
display: flex;
justify-content: space-between;
color: white;
`
const LeftSide = styled.div`
display: flex;
`
const RightSide = styled.div`
display: flex;
justify-content: space-evenly;
`
const LeftItem = styled.div`
margin: 0.6rem 3rem;
padding-top: 0.3rem;
cursor: pointer;
`
const RightItem = styled.div`
margin: 0.6rem 1.5rem;
padding-top: 0.3rem;
cursor: pointer;
`
const ProductCount = styled.span`
position: absolute;
top: -25%;
left: -25%;
background-color: #4CAF50;
border-radius: 50%;
width: 0.9rem;
height: 0.9rem;
text-align: center;
font-size: 0.6rem;
`
const DownArrow = styled.img.attrs(() => ({
    src: caretDown,
    alt: "caret-down"
  }))`
    width: 2.18rem;
    height: 1.25rem;
    padding-top: 0.5rem;
`
const Logo = styled.img.attrs(() => ({
    src: reeco,
    alt: "reeco"
  }))`
    width: 3.75rem;
    height: 1.88rem;
    padding-bottom: 0.3rem;
`  
const Navbar = () => {
  return (
    <>
    <NavWrapper>
        <LeftSide>            
            <LeftItem>
            <Logo />
            </LeftItem>
            <LeftItem>Store</LeftItem>
            <LeftItem>Orders</LeftItem>
            <LeftItem>Analytics</LeftItem>
        </LeftSide>
        <RightSide>
            <RightItem>
                <div style={{position: "relative"}}>
                    <ProductCount>1</ProductCount>
                🛒
                </div>                
            </RightItem>
            
            <RightItem>Hello, James <DownArrow/> </RightItem>
        </RightSide>
    </NavWrapper>
    </>
  )
}

export default Navbar
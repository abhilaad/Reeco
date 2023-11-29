import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
display: flex;
background-color: white;
height: 100px;
margin: 20px 40px 20px 40px;
border-radius: 8px;
`
const Items = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
width: 16%;
padding: 0px 15px;
`
const FirstTitle = styled.div`
color: grey;
font-weight: 600;
`
const SecondTitle = styled.div`
margin-top: 4px;
font-weight: 700;
`
const Divider = styled.div`
border-left: 1px solid lightgray;
margin: 10px 0px;
height: 75px;`

const IconWrapper = styled.div`
display: flex;
justify-content: space-between;
`
const IconItem = styled.span`
margin: 2px;
`

const OrderInfo = () => {
  return (
    <>
    <Wrapper>
        <Items>
            <FirstTitle>
                Supplier
            </FirstTitle>
            <SecondTitle>
                East coast fruits & vegetables
            </SecondTitle>
        </Items>
        <Divider />
        <Items>
            <FirstTitle>
                Shipping Date
            </FirstTitle>
            <SecondTitle>
                Thu, Feb 10
            </SecondTitle>
        </Items>
        <Divider />       
        <Items>
            <FirstTitle>
                Total
            </FirstTitle>
            <SecondTitle>
                $ 15,028.3
            </SecondTitle>
        </Items>
        <Divider />
        <Items>
            <FirstTitle>
                Category
            </FirstTitle>
            <SecondTitle>
                <IconWrapper>
                <IconItem>
                🍔   
                </IconItem>
                <IconItem>
                🍕
                </IconItem>
                <IconItem>
                🌭
                </IconItem>
                <IconItem>
                🥮
                </IconItem>
                </IconWrapper>
                <IconWrapper>
                <IconItem>
                🍥  
                </IconItem>
                <IconItem>
                🍗
                </IconItem>
                <IconItem>
                🍩
                </IconItem>
                <IconItem>
                🧁
                </IconItem>
                </IconWrapper>                               
             
            </SecondTitle>
        </Items>
        <Divider />
        <Items>
            <FirstTitle>
                Department
            </FirstTitle>
            <SecondTitle>
                300-444-678
            </SecondTitle>
        </Items>
        <Divider />
        <Items>
            <FirstTitle>
                Status
            </FirstTitle>
            <SecondTitle>
                Awaiting your approval
            </SecondTitle>
        </Items>
    </Wrapper>
    </>
  )
}

export default OrderInfo
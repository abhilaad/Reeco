import React from 'react'
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { setOrderApproved } from '../redux/OrderSlice'

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color: white;
`
const BreadCrumb = styled.div`
display: flex;
padding: 0.8rem 2.5rem;
`
const Item = styled.div`
margin: 0px 4px;
text-decoration: ${props => props?.underline ? "underline" : "none"};
color: grey;
`
const SecondLine = styled.div`
margin: 10px 10px;
display: flex;
justify-content: space-between;
`
const BoldText = styled.div`
margin: 0rem 2rem;
font-size: 1.2rem;
font-weight: 600;
`
const RightItem = styled.div`
display: flex;
`
const BackButton = styled.button`
margin: 0px 15px;
border: 2px solid green;
height: 25px;
width: 60px;
border-radius: 25px;
color: green;
font-weight: 700;
background-color: white;
cursor: ${props => props?.isapproved === true ? "pointer" : "initial"};
`
const ApproveButton = styled.button`
margin: 0px 30px 0px 15px;
border: none;
height: 25px;
width: 120px;
border-radius: 25px;
color: white;
background-color: green;
cursor: ${props => props?.isapproved === true ? "initial" : "pointer"};;
`
const CartTopSection = () => {
  const dispatch = useDispatch()
  const {isOrderApproved} = useSelector((state) => state.order);
  return (
    <>
    <Wrapper>
    <BreadCrumb>
    <Item>Orders</Item>
    <Item>&gt;</Item>
    <Item underline={"underline"}>Order 32457ABC</Item>
    </BreadCrumb>
    <SecondLine>
        <BoldText>Order 32457ABC</BoldText>
        <RightItem>
            <BackButton isapproved={isOrderApproved} onClick={()=>{
              if(isOrderApproved){
                dispatch(setOrderApproved(false))
              }
            }}>
                Back
            </BackButton>
            <ApproveButton isapproved={isOrderApproved} onClick={()=>{
              if(!isOrderApproved){
                dispatch(setOrderApproved(true))
              }
            }}>
                {isOrderApproved ? "Approved" : "Approve order"}
            </ApproveButton>
        </RightItem>
    </SecondLine>

    </Wrapper>
    </>
  )
}

export default CartTopSection
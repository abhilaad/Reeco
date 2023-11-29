import React from 'react'
import styled from "styled-components"
import avacado from "../assets/avacado.jpg"
import tick from "../assets/tick.svg"
import greenTick from "../assets/greenTick.svg"
import grayCross from "../assets/grayCross.png"
import orangeCross from "../assets/orangeCross.png"
import redCross from "../assets/redCross.png"

const Wrapper = styled.div`
display: flex;
width: 100%;
`

export const CartTable = () => {
  return (
    <div>
        <Wrapper>
        <div style={{width: "25%", border: "1px solid black", padding: "5px", textAlign:"center"}} >Product Name</div>
        <div style={{width: "12%", border: "1px solid black", padding: "5px"}} >Brand</div>
        <div style={{width: "12%", border: "1px solid black", padding: "5px"}} >Price</div>
        <div style={{width: "14%", border: "1px solid black", padding: "5px"}} >Quantity</div>
        <div style={{width: "10%", border: "1px solid black", padding: "5px"}} >Total</div>
        <div style={{width: "25%", border: "1px solid black", padding: "5px"}}>Status</div>
    </Wrapper>
    <div>
    { [1,2].map((item, index)=>{
        return (
            <Wrapper key={index}>
        <div style={{width: "25%", border: "1px solid black", padding: "10px", height: "70px", display:"flex", color:"gray"}} >
            <img src={avacado} alt="avacado" width="50px" height="50px" style={{padding: "5px"}} />
            <span>
            Chicken Breast Fillets, Boneeless Chicken 65
            </span>
        </div>
        <div style={{width: "12%", border: "1px solid black", padding: "10px", color:"gray"}} >Hormel Black Labelmany</div>
        <div style={{width: "12%", border: "1px solid black", padding: "10px", color:"gray"}} >$60.67 / 6*1LB</div>
        <div style={{width: "14%", border: "1px solid black", padding: "10px", color:"gray"}} >1 x 6*1LB</div>
        <div style={{width: "10%", border: "1px solid black", padding: "10px", color:"gray"}} >Total</div>
        <div style={{width: "25%", border: "1px solid black", padding: "10px", height: "70px", display:"flex", justifyContent: "space-evenly"}}>
            <button style={{ width: "125px", height: "30px", border: "none", borderRadius: "25px", color: "white", backgroundColor: "red"}}>
                Missing - Urgent
            </button>
            <img src={greenTick} alt="tick" width="25px" height="25px" />
            <img src={grayCross} alt="cross" width="30px" height="30px" />
            <span style={{color: "gray", paddingTop: "4px"}}>
                Edit
            </span>
        </div>
    </Wrapper>
        )
    })}
    </div>
    </div>
  )
}

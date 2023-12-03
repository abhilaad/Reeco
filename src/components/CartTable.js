import React, { useState, useEffect } from "react";
import styled from "styled-components";
import avacado from "../assets/avacado.jpg";
import tick from "../assets/tick.svg";
import greenTick from "../assets/greenTick.svg";
import grayCross from "../assets/grayCross.png";
import orangeCross from "../assets/orangeCross.png";
import redCross from "../assets/redCross.png";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../redux/cartSlice";
import ConfirmationModal from "./ConfirmationModal";
import EditModal from "./EditModal";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  color: gray;
`;
const TableHeader = styled.div`
  ${(props) =>
    props.product==="product" && {
      width: "25%",
      borderTop: "1px solid lightGray",
      borderLeft: "1px solid lightGray",
      borderBottom: "1px solid lightGray",
      padding: "5px",
      textAlign: "center",
      borderRadius: "10px 0px 0px 0px",
      fontWeight: "550",
    }}
  ${(props) =>
    props.brand==="brand" && {
      width: "12%",
      borderBottom: "1px solid lightGray",
      borderTop: "1px solid lightGray",
      padding: "5px",
      fontWeight: "550",
    }}  
    ${(props) =>
    props.quantity==="quantity" && {
      width: "14%",
      borderBottom: "1px solid lightGray",
      borderTop: "1px solid lightGray",
      padding: "5px",
      fontWeight: "550",
    }} 
    ${(props) =>
    props.total==="total" && {
      width: "10%",
      borderBottom: "1px solid lightGray",
      borderTop: "1px solid lightGray",
      padding: "5px",
      fontWeight: "550",
    }}
    ${(props) =>
    props.status==="status" && {
      width: "25%",
      borderBottom: "1px solid lightGray",
      borderTop: "1px solid lightGray",
      borderRight: "1px solid lightGray",
      padding: "5px",
      borderRadius: "0px 10px 0px 0px",
      fontWeight: "550",
    }}
`;
const TableCell = styled.div`
  ${(props) =>
    props.product === "product" && {
      width: "25%",
      borderBottom: "1px solid black",
      padding: "10px",
    //   height: "70px",
      display: "flex",
      color: "gray",
    }}
  ${(props) =>
    props.brand === "brand" && {
      width: "12%",
      borderBottom: "1px solid black",
      padding: "10px 10px 10px 5px",
      color: "gray",
    }}  
     ${(props) =>
    props.price === "price" && {
      width: "13%",
      borderBottom: "1px solid black",
      padding: "20px 10px 20px 5px",
      color: "gray",
      display: "flex",
      flexDirection: "column",
    }}  
    ${(props) =>
    props.quantity === "quantity" && {
      width: "13%",
      borderBottom: "1px solid black",
      padding: "20px 10px 20px 5px",
      color: "gray",
    }} 
    ${(props) =>
    props.total === "total" && {
      width: "10%",
      borderBottom: "1px solid black",
      padding: "20px 10px 20px 5px",
      color: "gray",
    }}
    ${(props) =>
    props.status === "status" && {
      width: "25%",
      borderBottom: "1px solid black",
      padding: "20px 10px 20px 5px",
    //   height: "70px",
      display: "flex",
      justifyContent: "space-evenly",
      backgroundColor: "#f5f2f2",
    }}
    ${(props) =>
    props.oldprice === "adjustHeight" && {
      padding: "10px 10px 10px 5px",
    }}
`;
const ButtonColor = styled.button`
  ${(props) =>
    props.val === "Approved" && {
      backgroundColor: "seagreen",
    }}
  ${(props) =>
    props.val === "Missing" && {
      backgroundColor: "darkorange",
    }}  
    ${(props) =>
    props.val === "Missing-Urgent" && {
      backgroundColor: "red",
    }}
    ${(props) =>
    props.both === "both" && {
      height: "45px",
      padding: "5px 15px 5px 15px"
    }}

`;

export const CartTable = ({filteredData, searchText}) => {
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);  
  const {isOrderApproved} = useSelector((state) => state.order);
  useEffect(()=>{
    setData(filteredData)
  },[filteredData])
  if (data?.length === 0 && searchText !== "") return (<>
  <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "20vh"}}>No Item found</div>
  </>);
  return (
    <div>
      {showEditModal && (
        <EditModal
          show={showEditModal}
          onClose={setShowEditModal}
          data={data}
          index={currentIndex}
        />
      )}
      {show && (
        <ConfirmationModal
          show={show}
          onClose={setShow}
          data={data}
          index={currentIndex}
        />
      )}
      <Wrapper>
        <TableHeader product="product">Product Name</TableHeader>
        <TableHeader brand="brand">Brand</TableHeader>
        <TableHeader brand="brand">Price</TableHeader>
        <TableHeader quantity="quantity">Quantity</TableHeader>
        <TableHeader total="total">Total</TableHeader>
        <TableHeader status="status">Status</TableHeader>
      </Wrapper>
      <div>
        {data?.length > 0 &&
          data.map((item, index) => {
            return (
              <Wrapper key={index}>
                <TableCell product="product">
                  <img
                    src={avacado}
                    alt="avacado"
                    width="50px"
                    height="50px"
                    style={{ padding: "5px" }}
                  />
                  <span>{item?.product_name}</span>
                </TableCell>
                <TableCell brand="brand">{item?.brand}</TableCell>
                <TableCell
                  price="price"
                  oldprice={
                    item?.old_price !== 0 && item?.old_price !== item?.price
                      ? "adjustHeight"
                      : ""
                  }
                >
                  <div>${item?.price} / 6*1LB</div>
                  {item?.old_price !== 0 && item?.old_price !== item?.price && (
                    <del style={{ color: "lightgray" }}>${item?.old_price}</del>
                  )}
                </TableCell>

                <TableCell quantity="quantity">
                  {item?.quantity} x 6*1LB
                </TableCell>
                <TableCell total="total">
                  ${(item?.price * item?.quantity).toFixed(2)}
                </TableCell>
                <TableCell status="status">
                  <ButtonColor
                  
                    val={item?.old_price !== 0 || item?.old_quantity ? "Approved" : item?.status}
                    both={item?.old_price !== 0 && item?.old_quantity !== 0 ? "both" : ""}
                    className={
                      item?.status !== "" || item?.old_price !== 0 || item?.old_quantity !== 0
                        ? "statusButton "
                        :  "statusButtonHidden"
                    }
                  > 
                    {item?.old_price !== 0 && item?.old_quantity !== 0 ? "Quantity and Price Updated" : item?.old_price  ? "Price Updated" : item?.old_quantity !==0 ? "Updated Quantity" :  item?.status}
                  </ButtonColor>
                  <img
                    src={item?.status === "Approved" ? greenTick : tick}
                    alt="tick"
                    width="25px"
                    height="25px"
                    style={{ cursor: isOrderApproved ? "initial" : "pointer" }}
                    onClick={() => {
                      if(!isOrderApproved){
                        const obj = {
                          ...item,
                          status: item?.status !== "Approved" ? "Approved" : "",
                        };
                        const newData = [...cartData];
                        const getIndex = newData.findIndex((ele)=> ele?.id === item?.id)
                        newData[getIndex] = obj;
                        dispatch(updateStatus(newData));
                      }
                    }}
                  />
                  <img
                    src={
                      item?.status === "Missing"
                        ? orangeCross
                        : item?.status === "Missing-Urgent"
                        ? redCross
                        : grayCross
                    }
                    alt="cross"
                    width="30px"
                    height="30px"
                    style={{ cursor: isOrderApproved ? "initial" : "pointer" }}
                    onClick={() => {
                      if(!isOrderApproved){
                        setCurrentIndex(index);
                      setShow(true);
                      }
                    }}
                  />
                  <span
                    style={{
                      color: "gray",
                      paddingTop: "4px",
                      cursor: isOrderApproved ? "initial" : "pointer",
                    }}
                    onClick={() => {
                      if(!isOrderApproved){
                        setCurrentIndex(index);
                        setShowEditModal(true);
                      }
                    }}
                  >
                    Edit
                  </span>
                </TableCell>
              </Wrapper>
            );
          })}
      </div>
    </div>
  );
};

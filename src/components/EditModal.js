import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import avacado from "../assets/avacado.jpg";
import { updateStatus } from "../redux/cartSlice";

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
`;
const ModalWrapper = styled.div`
  position: fixed;
  max-width: 650px;
  width: 100%;
  padding: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  background-color: white;
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const ProductName = styled.div`
  ${(props) =>
    props.title && {
      marginTop: "20px",
      fontWeight: "600",
      color: "black",
      fontSize: "18px",
    }}
`;
const Brand = styled.div`
  ${(props) =>
    props.brand && {
      margin: "0px 0px 15px 0px",
      color: "gray",
      fontWeight: "600",
      fontSize: "18px",
    }}
`;
const WrapperDiv = styled.div`
  ${(props) =>
    props.reasonTitle && {
      margin: "15px 0px 15px 0px",
    }}
  ${(props) =>
    props.reasonText && {
      display: "flex",
    }}
    ${(props) =>
    props.actionButton && {
      display: "flex",
      justifyContent: "end",
      margin: "15px 0px 15px 0px",
    }}
    ${(props) =>
    props.thirdColumn && {
      display: "flex",
      width: "100%",
    }}
`;
const ReasonWrapperButton = styled.button`
  ${(props) =>
    props.r1 && {
      color: "gray",
      border: "1px solid lightgray",
      backgroundColor: "white",
      width: "130px",
      padding: "10px",
      borderRadius: "25px",
    }}
  ${(props) =>
    props.r2 && {
      color: "gray",
      marginLeft: "10px",
      border: "1px solid lightgray",
      backgroundColor: "white",
      width: "180px",
      padding: "10px",
      borderRadius: "25px",
    }}
    ${(props) =>
    props.r3 && {
      color: "gray",
      marginLeft: "10px",
      border: "1px solid lightgray",
      backgroundColor: "white",
      width: "170px",
      padding: "10px",
      borderRadius: "25px",
    }}
    ${(props) =>
    props.r4 && {
      color: "gray",
      marginLeft: "10px",
      border: "1px solid lightgray",
      backgroundColor: "white",
      width: "100px",
      padding: "10px",
      borderRadius: "25px",
    }}
`;
const ActionButton = styled.button`
  ${(props) =>
    props.decrement && {
      backgroundColor: "lightgreen",
      cursor: "pointer",
      marginRight: "15px",
      fontWeight: "600",
      textAlign: "center",
      borderRadius: "50%",
      width: "25px",
      height: "25px",
      color: "white",
      border: "none",
    }}
  ${(props) =>
    props.increment && {
      backgroundColor: "lightgreen",
      cursor: "pointer",
      marginLeft: "15px",
      fontWeight: "600",
      textAlign: "center",
      borderRadius: "50%",
      width: "25px",
      height: "25px",
      color: "white",
      border: "none",
    }}
    ${(props) =>
    props.cancel && {
      width: "80px",
      padding: "10px",
      border: "none",
      backgroundColor: "white",
      fontWeight: "600",
      color: "green",
      borderRadius: "25px",
    }}
    ${(props) =>
    props.send && {
      width: "80px",
      padding: "10px",
      border: "none",
      backgroundColor: "green",
      fontWeight: "600",
      color: "white",
      borderRadius: "25px",
    }}
`;
const WrapperInput = styled.input`
  ${(props) =>
    props.price && {
      width: "80px",
      marginLeft: "40px",
      border: "1px solid lightgray",
      outline: "none",
      textAlign: "center",
      color: "gray",
      borderRadius: "5px",
      padding: "0px 10px 0px 10px",
      fontWeight: "600",
    }}
  ${(props) =>
    props.quantity && {
      width: "80px",
      border: "1px solid lightgray",
      outline: "none",
      textAlign: "center",
      color: "gray",
      borderRadius: "5px",
      padding: "0px 10px 0px 10px",
      fontWeight: "600",
    }}
`;

const FirstSection = styled.div`
  ${(props) =>
    props.renderImg && {
      width: "25%",
      height: "180",
    }}
`;
const SecondSection = styled.div`
  ${(props) =>
    props.content && {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      height: "180",
    }}
`;
const SecondSectionItems = styled.div`
  ${(props) =>
    props.column && {
      display: "flex",
      margin: "15px",
    }}
`;
const WrapperSpan = styled.span`
  ${(props) =>
    props.price && {
      width: "150px",
      padding: "0px 10px 0px 10px",
      fontWeight: "500",
    }}
  ${(props) =>
    props.showPrice && {
      padding: "0px 10px 0px 10px",
      color: "gray",
      fontWeight: "500",
    }}
    ${(props) =>
    props.quantity && {
      width: "150px",
      padding: "0px 10px 0px 10px",
      fontWeight: "500",
    }}
    ${(props) =>
    props.showQuantity && {
      padding: "0px 10px 0px 10px",
      color: "gray",
      fontWeight: "500",
    }}
    ${(props) =>
    props.cross && {
      position: "fixed",
      top: "10px",
      right: "0",
      cursor: "pointer",
      fontWeight: "600",
      marginRight: "20px",
      color: "gray",
      marginTop: "10px",
    }}
    ${(props) =>
    props.total && {
      width: "150px",
      padding: "0px 10px 0px 10px",
      fontWeight: "500",
    }}
    ${(props) =>
    props.totalPrice && {
      color: "gray",
      fontWeight: "500",
      marginLeft: "60px",
    }}
`;

const EditModal = ({ show, onClose, data, index }) => {
  const [reasonId, setReasonId] = useState(data?.[index]?.comment || "");
  const [price, setPrice] = useState(data?.[index]?.price || 0);
  const [oldPrice, setOldPrice] = useState(data?.[index]?.old_price || 0);
  const [quantity, setQuantity] = useState(data?.[index]?.quantity || 0);
  const [oldQuantity, setOldQuantity] = useState(
    data?.[index]?.old_quantity || 0
  );
  const dispatch = useDispatch();

  const handleSend = () => {
    if (
      data?.[index]?.price !== price ||
      data?.[index]?.quantity !== quantity
    ) {
        
      const obj = {
        ...data?.[index],
        price,
        quantity,
        comment: reasonId,
        old_price: oldPrice,
        old_quantity: oldQuantity
      };
      const newData = [...data];
      newData[index] = obj;
      dispatch(updateStatus(newData));
      onClose(false);
    }
  };
  return (
    show && (
      <>
        <ModalBackdrop
          className="modalBackdrop"
          style={{ background: "rgba(0,0,0,.4)" }}
        ></ModalBackdrop>
        <ModalWrapper>
          <ModalHeader>
            <WrapperSpan cross onClick={() => onClose(false)}>
              X
            </WrapperSpan>
          </ModalHeader>
          <ModalBody>
            <ProductName title>{data?.[index]?.product_name}</ProductName>
            <Brand brand>{data?.[index]?.brand}</Brand>
            <WrapperDiv thirdColumn>
              <FirstSection renderImg>
                <img src={avacado} width="150px" height="150px" alt="fruit" />
              </FirstSection>
              <SecondSection content>
                <SecondSectionItems column>
                  <WrapperSpan price>Price</WrapperSpan>
                  <WrapperInput
                    price
                    type="number"
                    value={price}
                    onChange={(e) => {
                      if (data?.[index]?.old_price === 0) {
                        if (Number(e.target.value) !== data?.[index]?.price) {
                          setOldPrice(data?.[index]?.price);
                        } else setOldPrice(0);
                      }
                      if (
                        Number(e.target.value) >= 0 ||
                        e.target.value === ""
                      ) {
                        setPrice(
                          e.target.value === "" ? "" : Number(e.target.value)
                        );
                      }
                    }}
                  />
                  <WrapperSpan showPrice>/ 6 * 1LB</WrapperSpan>
                </SecondSectionItems>
                <SecondSectionItems column>
                  <WrapperSpan quantity>Quantity</WrapperSpan>
                  <ActionButton
                    decrement
                    onClick={() => {
                      if (data?.[index]?.old_quantity === 0) {
                        setOldQuantity(data?.[index]?.quantity);
                      }
                      setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
                    }}
                  >
                    {" "}
                    -{" "}
                  </ActionButton>
                  <WrapperInput
                    quantity
                    type="text"
                    value={quantity}
                    maxLength={4}
                    onChange={(e) => {
                      if (data?.[index]?.old_quantity === 0) {
                        
                        if (
                          Number(e.target.value) !== data?.[index]?.quantity
                        ) {
                          setOldQuantity(data?.[index]?.quantity);
                        } else setOldQuantity(0);
                      }
                      if (Number(e.target.value) >= 0 || e.target.value === "")
                        setQuantity(
                          e.target.value === "" ? "" : Number(e.target.value)
                        );
                    }}
                  />
                  <ActionButton
                    increment
                    onClick={() => {
                      if (data?.[index]?.old_quantity === 0) {
                        setOldQuantity(data?.[index]?.quantity);
                      }
                      setQuantity((prev) => prev + 1);
                    }}
                  >
                    {" "}
                    +{" "}
                  </ActionButton>
                  <WrapperSpan showQuantity>/ 6 * 1LB</WrapperSpan>
                </SecondSectionItems>
                <SecondSectionItems column>
                  <WrapperSpan total>Total</WrapperSpan>
                  <WrapperSpan totalPrice>
                    ${(price * quantity).toFixed(2)}
                  </WrapperSpan>
                </SecondSectionItems>
              </SecondSection>
            </WrapperDiv>
            <WrapperDiv reasonTitle>
              <span style={{ fontWeight: "700", marginRight: "15px" }}>
                Choose Reason
              </span>
              <span
                style={{
                  color: "lightgray",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                (Optional)
              </span>
            </WrapperDiv>
            <WrapperDiv reasonText>
              <ReasonWrapperButton
                r1
                className={
                  reasonId === 1 || data[index]?.reason === 1
                    ? "reasonButton"
                    : null
                }
                onClick={() => {
                  setReasonId(1);
                }}
              >
                Missing Product
              </ReasonWrapperButton>
              <ReasonWrapperButton
                r2
                className={
                  reasonId === 2 || data[index]?.reason === 2
                    ? "reasonButton"
                    : null
                }
                onClick={() => {
                  setReasonId(2);
                }}
              >
                Quantity is not the same
              </ReasonWrapperButton>
              <ReasonWrapperButton
                r3
                className={
                  reasonId === 3 || data[index]?.reason === 3
                    ? "reasonButton"
                    : null
                }
                onClick={() => {
                  setReasonId(3);
                }}
              >
                Price is not the same
              </ReasonWrapperButton>
              <ReasonWrapperButton
                r4
                className={
                  reasonId === 4 || data[index]?.reason === 4
                    ? "reasonButton"
                    : null
                }
                onClick={() => {
                  setReasonId(4);
                }}
              >
                Other
              </ReasonWrapperButton>
            </WrapperDiv>
            <WrapperDiv actionButton>
              <ActionButton cancel onClick={() => onClose(false)}>
                Cancel
              </ActionButton>
              <ActionButton onClick={handleSend} send>
                Send
              </ActionButton>
            </WrapperDiv>
          </ModalBody>
        </ModalWrapper>
      </>
    )
  );
};

export default EditModal;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../redux/cartSlice";
import styled from "styled-components";

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
  max-width: 500px;
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
const WrapperDiv = styled.div`
  ${(props) =>
    props.modalTitle && {
      fontWeight: 700,
      color: "black",
      margin: "10px",
    }}
  ${(props) =>
    props.actionSection && {
      display: "flex",
      flexDirection: "row-reverse",
      fontWeight: "600",
    }}
    ${(props) =>
    props.action && {
      margin: "20px",
      color: "black",
      fontWeight: "700",
      cursor: "pointer",
    }}
`;
const ModalBody = styled.div`
  display: "flex";
  flex-direction: "column";
  padding: 10px;
`;

const ConfirmationModal = ({ show, onClose, data, index }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData); 
  return (
    show && (
      <>
        <ModalBackdrop
          className="modalBackdrop"
          style={{ background: "rgba(0,0,0,.4)" }}
        ></ModalBackdrop>
        <ModalWrapper>
          <ModalHeader className="modalHeader">
            <WrapperDiv modalTitle>Missing Product</WrapperDiv>
            <span
              style={{
                cursor: "pointer",
                fontWeight: "600",
                marginRight: "20px",
              }}
              onClick={() => onClose(false)}
            >
              X
            </span>
          </ModalHeader>
          <ModalBody>
            <div>Is, '{data?.[index]?.product_name}' urgent ?</div>
            <WrapperDiv actionSection>
              <WrapperDiv
                action
                onClick={() => {
                  const obj = { ...data[index], status: "Missing-Urgent" };
                  const newData = [...cartData];
                  const getIndex = newData.findIndex((ele)=> ele?.id === data?.[index]?.id)
                  newData[getIndex] = obj;
                  dispatch(updateStatus(newData));
                  onClose(false);
                }}
              >
                Yes
              </WrapperDiv>
              <WrapperDiv
                action
                onClick={() => {
                  const obj = { ...data[index], status: "Missing" };
                  const newData = [...cartData];
                  const getIndex = newData.findIndex((ele)=> ele?.id === data?.[index]?.id)
                  newData[getIndex] = obj;
                  dispatch(updateStatus(newData));
                  onClose(false);
                }}
              >
                No
              </WrapperDiv>
            </WrapperDiv>
          </ModalBody>
        </ModalWrapper>
      </>
    )
  );
};

export default ConfirmationModal;

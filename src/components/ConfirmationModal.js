import React from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../redux/cartSlice";

const ConfirmationModal = ({ show, onClose, data, index }) => {
  const dispatch = useDispatch();
  return (
    show && (
      <>
        <div
          className="modalBackdrop"
          style={{ background: "rgba(0,0,0,.2)" }}
        ></div>
        <div className="modalWrapper">
          <div className="modalHeader">
            <div
              className="modalTitle"
              style={{ fontWeight: 600, color: "black", margin: "10px" }}
            >
              Missing Product
            </div>
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
          </div>
          <div
            className="modalBody"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div>Is, 'Chicken Breast Fillets, Boneless ...' urgent ?</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                fontWeight: "600",
              }}
            >
              <div
                style={{
                  margin: "20px",
                  color: "black",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const obj = { ...data[index], status: "Missing-Urgent" };
                  const newData = [...data];
                  newData[index] = obj;
                  dispatch(updateStatus(newData));
                  onClose(false);
                }}
              >
                Yes
              </div>
              <div
                style={{
                  margin: "20px",
                  color: "black",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const obj = { ...data[index], status: "Missing" };
                  const newData = [...data];
                  newData[index] = obj;
                  dispatch(updateStatus(newData));
                  onClose(false);
                }}
              >
                No
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ConfirmationModal;

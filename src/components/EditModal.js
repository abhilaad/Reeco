import React from "react";
import { useDispatch } from "react-redux";

const EditModal = ({ show, onClose, data, index }) => {
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
            <span
              style={{
                position: "fixed",
                top: "10px",
                right: "0",
                cursor: "pointer",
                fontWeight: "600",
                marginRight: "20px",
                color: "gray",
              }}
              onClick={() => onClose(false)}
            >
              X
            </span>
          </div>
          <div
            className="modalBody"
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <div style={{ fontWeight: 600, color: "black", margin: "10px" }}>
              Chicken Breast Fillets, Boneless Marinated 6 Ounce Raw...
            </div>
            <div>American Roland</div>
          </div>
        </div>
      </>
    )
  );
};

export default EditModal;

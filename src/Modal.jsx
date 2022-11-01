import React from "react";
import "./modal.css";
import "./App.js";

function Modal({ modalData, show, onClose, setShow }) {
  if (!show) {
    return null;
  }
  console.log(modalData.fullName, "this log");

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>{modalData.brandDrugName[0]}</h1>
          <h4>({modalData.genericDrugName})</h4>
          <p><b>Treats: </b>{modalData.FDAIndications}</p>
          <p><b>Drug Class: </b>{modalData.drugClass}</p>
          <p><b>Rx Only: </b>{modalData["Rx-only"] ? "true": "false"}</p>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={() => setShow(false)}>
            Discover More Drugs 🔍
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

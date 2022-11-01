import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import "./App.js";
import Modal from "./Modal.jsx";

export default function Pharma ({ drugs }) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState();

  console.log(drugs, "Overhere");
  console.log(show);

  if (!drugs) return <h1></h1>;

  return (
    <div>
      <div className="drugs">
        <header className="header">
          <h1>Lin Lin's Pharmacy</h1>
          <h3>Drugs in stock:</h3>
        </header>

        <div className="flex-container">
          {drugs.map((banana) => (
            <div onClick={() => setShow(true)} key={banana.id}>
              <img
                className="product-pic"
                src={banana.image}
                alt=""
                onClick={() => {
                  setModalData(banana);
                }}
              ></img>
            </div>
          ))}
        </div>

        {/* <div>
          {drugs.map(park => (
            <div className="park-item" key={park.id}>
              <h3>{park.fullName}</h3>
            </div>
          ))}
        </div> */}

        <Modal
          setShow={setShow}
          show={show}
          onClose={() => setShow(false)}
          modalData={modalData}
        />

      </div>
    </div>
  );
}

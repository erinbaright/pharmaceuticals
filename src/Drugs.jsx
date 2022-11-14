import React from "react";
import { useState } from "react";
import "./App.css";
import "./App.js";
import Modal from "./Modal.jsx";

export default function Pharma({ drugs }) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState();

  console.log(drugs, "Overhere");
  console.log(show);

  if (!drugs) return <h1>.</h1>;

  return (
    <div>
      <div className="drugs">
        <header className="header">
          <div className="pharmacy-name">
            <h1 className="LinLin">Lam Pharmacy</h1>
            <h2 className="slogan">Your trusted neighborhood pharmacist</h2>
          </div>
        </header>

        <h2>Pharmaceuticals in stock:</h2>

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

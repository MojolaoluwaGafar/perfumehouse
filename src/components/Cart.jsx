import React from 'react'
import { useState } from 'react';
import {perfumes} from "../data"
import Cartitem from './Cartitem';
import SinglePerfume from './SinglePerfume';

function Cart ({id,title,image,rating,price,oldPrice,itemsLeft}){
 const [num, setNum] = useState(0);
 
  return (
    <div
      style={{ border: "1px solid #D0D0D0"}}
      className=" py-4 px-1 mt-5 mt-lg-0 "
    >
      <h4 className="fw-bold">My Cart Preview</h4>
      <div className="d-flex flex-column pt-3" style={{ width: "300px" }}>
        {perfumes.map((perfume) => {
          return <Cartitem key={perfume.id} {...perfume} />;
        })}
      </div>
      <div className="d-flex flex-column pt-5">
        <div className="d-flex justify-content-between">
          <p>Sub Total</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Delivery</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>#0.00</p>
        </div>
      </div>
      <button
        style={{ height: "40px" }}
        className="w-100 rounded-2 main-color-bg text-white border-0"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Cart
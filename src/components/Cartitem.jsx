import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context";
import { TbCurrencyNaira } from "react-icons/tb";

const Cartitem = ({ id, image, title, price, quantity }) => {
    const {removeItemFromCart,handleIncrease, handleDecrease} = useContext(CartContext)
  return (
    <div className="d-flex gap-3 py-4">
      <div>
        <img
        className="rounded-2"
          style={{ width: "95px", height: "110px" }}
          src={image}
          alt={title}
        />
      </div>
      <div style={{ height: "98px", width: "250px" }}>
        <p>{title}</p>
        <div className="d-flex gap-1">
          <button
            disabled={quantity <= 1}
            onClick={() => handleDecrease({ id, title, image, price })}
            className={
              quantity <= 1
                ? "bg-secondary-subtle text-white border-0 rounded-1 h-25"
                : "main-color-bg text-white border-0 rounded-1 h-25"
            }
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => handleIncrease({ id, title, image, price })}
            className="main-color-bg text-white border-0 rounded-1 h-25"
          >
            +
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="pt-3">
            <TbCurrencyNaira />
            {price}
          </p>
          <button
            onClick={() => removeItemFromCart({ id, title, image, price })}
            className="rounded-2 text-danger border-danger bg-transparent h-25 mt-2 w-50 me-1"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

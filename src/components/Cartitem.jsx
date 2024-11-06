import React from "react";
import { useState } from "react";

const Cartitem = ({ id, image, title, price }) => {
  const [num, setNum] = useState(0);
  const handleDecreaseNum = () => {
    setNum(Math.max(0, num - 1));
  };
  const handleIncreaseNum = () => {
    setNum(num + 1);
  };

  const removeItem = (itemId) => {
    const remainingProducts = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(remainingProducts);
  };

  return (
    <div className="d-flex gap-3 py-4">
      <div>
        <img
          style={{ width: "95px", height: "110px" }}
          src={image}
          alt={title}
        />
      </div>
      <div style={{ height: "98px", width: "250px" }}>
        <p>{title}</p>
        <div className="d-flex gap-1">
          <button
            onClick={handleDecreaseNum}
            style={{ backgroundColor: "#D2D2D2" }}
            className="main-color-bg text-white border-0 rounded-1 h-25"
          >
            -
          </button>
          <p>{num}</p>
          <button
            onClick={handleIncreaseNum}
            className="main-color-bg text-white border-0 rounded-1 h-25"
          >
            +
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="pt-3">N{price}</p>
          <button className="rounded-2 text-danger border-danger bg-transparent h-25 mt-2 w-50">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

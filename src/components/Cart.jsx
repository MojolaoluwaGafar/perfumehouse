import React from "react";
import { useState, useContext } from "react";
import { perfumes } from "../data";
import Cartitem from "./Cartitem";
import SinglePerfume from "./SinglePerfume";
import { CartContext } from "../context";
import ConfirmOrderModal from "./ConfirmOrderModal";
import { TbCurrencyNaira } from "react-icons/tb";
function Cart({ id, title, image, rating, price, oldPrice, itemsLeft }) {
  const [num, setNum] = useState(0);
  const { cart, totalPrice, showModal, setShowModal, confirmOrder } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="rounded-2 border border-1 border-secondary p-2">
        <h1 className="fs-4 mb-4">My Cart Preview</h1>
        <h3 className="fs-5 text-danger">Cart is empty</h3>
      </div>
    );
  }

  return (
    <div
      style={{ border: "1px solid #D0D0D0" }}
      className=" py-4 px-1 mt-5 mt-lg-0 "
    >
      {" "}
      {showModal && (
        <ConfirmOrderModal showModal={showModal} setShowModal={setShowModal} />
      )}
      <h4 className="fw-bold">My Cart Preview</h4>
      <div className="d-flex flex-column pt-3" style={{ width: "300px" }}>
        {cart.map((perfume) => {
          return <Cartitem key={perfume.id} {...perfume} />;
        })}
      </div>
      <div className="d-flex flex-column pt-5">
        <div className="d-flex justify-content-between">
          <p>Sub Total</p>
          <p>
            <TbCurrencyNaira />
            {totalPrice}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Delivery</p>
          <p>
            <TbCurrencyNaira />
            0.00
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>
            <TbCurrencyNaira />
            {totalPrice}
          </p>
        </div>
      </div>
      <button
        onClick={confirmOrder}
        style={{ height: "40px" }}
        className="w-100 rounded-2 main-color-bg text-white border-0"
      >
        Confirm Order
      </button>
    </div>
  );
}

export default Cart;

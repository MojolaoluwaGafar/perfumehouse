import React from 'react'
import { useState,useContext } from 'react'
import { perfumes } from '../data'
import { IoMdStar } from "react-icons/io";
import { CartContext } from '../context';
import { TbCurrencyNaira } from "react-icons/tb";

function SinglePerfume ({id, image, title, price, itemsLeft, rating, oldPrice, inCart}){
  const{addToCart} = useContext(CartContext)
    const [cart, setCart] = useState(perfumes)
    // const handleAddToCart = (perfumeId)=>{
    //     const perfumeChoice = cart.filter((cartitem)=> cartitem.id === perfumeId)
    //     setCart(perfumeChoice)
    //     if (perfumeChoice === perfumes.id) {
    //       setCart(perfumeChoice)
    //     } else {
    //       setCart(cart)
    //     }
    // }

  return (
    <div
      style={{ width: "256.62px" }}
      className="border border-1 rounded-2 mx-auto"
    >
      <img src={image} alt={title} className="w-100" />
      <div className="p-3">
        <h2 className="fs-6 fw-bold mb-2"> {title} </h2>
        <div className="d-flex gap-2">
          <p className="text-warning fs-5">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <span className="text-dark">5.0</span>
          </p>
          <p> ({itemsLeft}) </p>
        </div>
        <div className="d-flex gap-2">
          <h2 className="fs-5 main-color">
            <TbCurrencyNaira />
            {price}
          </h2>
          <h2 className="fs-5 text-decoration-line-through">
            <TbCurrencyNaira />{oldPrice}
          </h2>
        </div>
        <button
          style={{ height: "40px", cursor: inCart ? "not-allowed" : "pointer" }}
          className={`w-100 rounded-2 main-color-bg text-white border-0 ${
            inCart ? "bg-secondary-subtle" : "main-color-bg"
          }`}
          onClick={() => addToCart({ image, title, price, id })}
          disabled={inCart}
        >
          {inCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );};


export default SinglePerfume
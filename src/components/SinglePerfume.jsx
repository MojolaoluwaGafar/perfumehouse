import React from 'react'
import { useState } from 'react'
import { perfumes } from '../data'

function SinglePerfume ({id, image, title, price, itemsLeft, rating, oldPrice}){
  
    const [cart, setCart] = useState(perfumes)
    const handleAddToCart = (perfumeId)=>{
        const perfumeChoice = cart.filter((cartitem)=> cartitem.id === perfumeId)
        setCart(perfumeChoice)
        if (perfumeChoice === perfumes.id) {
          setCart(perfumeChoice)
        } else {
          setCart(cart)
        }
    }

  return (
    <div style={{width: "256.62px"}} className='border border-1 rounded-2 mx-auto'>
        <img src={image} alt={title} className='w-100' />
        <div className='p-3'>
           <h2 className='fs-6 fw-bold mb-2'> {title} </h2>
           <div className="d-flex gap-2">
            <p className='text-dark fw-bold'>stars {rating}</p>
            <p> {itemsLeft} </p>
           </div>
           <div className="d-flex gap-2">
            <h2 className='fs-5 main-color'># {price}</h2>
            <h2 className="fs-5 text-decoration-line-through"> #{oldPrice}</h2>
           </div>
           <button style={{height: "40px"}} className="w-100 rounded-2 main-color-bg text-white border-0"
           onClick={handleAddToCart}>
            Add To Cart</button>
        </div>
    </div>
  )};


export default SinglePerfume
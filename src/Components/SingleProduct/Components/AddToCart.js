import React, { useState } from 'react'
import {FaCheck} from 'react-icons/fa'
import '../SingleProduct.css'
import ToggleAmount from './ToggleAmount'
import { NavLink } from 'react-router-dom'
import {useCartContext} from '../../../Context/cartContext'

const AddToCart = ({product}) => {

    const {id, colors, stock} = product

    const {addToCart} = useCartContext()

    const [amount, setAmount] = useState(1)
    const [activeColor, setActiveColor] = useState(colors[0])

    const increaseAmount = () =>{
        return amount < stock ? setAmount(amount + 1) : stock
    }

    const decreaseAmount = () =>{
        return amount > 1 ? setAmount(amount - 1) : 1
    }

  return (
    <div className='w-[45%] lg:w-[28%] flex flex-col justify-around'>
      <div className='my-4 flex justify-around'>
      <p>Color: </p>
        {colors.map((curElem,index)=>{
            return(
                <div className={activeColor===curElem?'colors-container active':'colors-container'} 
                onClick={()=> setActiveColor(curElem)}>
                    <button className='btn-colors' 
                    style={{backgroundColor:`${curElem}`}} key={index}></button>
                    <FaCheck className={activeColor===curElem?'icon icon-active':'icon'}/>
                </div>
            )
        })}
      </div>
      <ToggleAmount amount={amount} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount}/>
      <NavLink to='/cart'>
        <button className='bg-purple-700 text-xs p-2 text-white font-medium my-4 w-full'
        onClick={() => addToCart(id,amount,activeColor,product)}>ADD TO CART</button>
      </NavLink>
    </div>
  )
}

export default AddToCart

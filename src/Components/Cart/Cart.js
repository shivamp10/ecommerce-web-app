import React from 'react'
import { useCartContext } from '../../Context/cartContext'
import './CartStyle.css'
import FormatPrice from '../../helper/FormatPrice'
import ToggleAmount from '../SingleProduct/Components/ToggleAmount'
import {MdDelete} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Cart = () => {

  const {cart, deleteCartItems,increaseAmount,decreaseAmount} = useCartContext()


  return (
    <div className='mt-20 px-4 lg:px-40'>
      <h1 className='my-8 text-2xl font-medium'>Cart Items</h1>
      <div className='grid grid-rows-[1fr 0.1fr 1.5fr 0.1fr 1fr] gap-y-4'>
        <div className='grid grid-cols-4 lg:grid-cols-5 justify-items-center items-center'>
          <p>ITEM</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p className='hidden lg:block'>SUBTOTOAL</p>
          <p>REMOVE</p>
        </div>
        <hr style={{width:'100%'}}/>
        <div className='grid gap-y-6'>
          {
            cart.map((curElem)=>{
              return(
                <div className='grid grid-cols-4 lg:grid-cols-5 justify-items-center items-center'>
                  <div className='flex flex-col lg:flex-row w-full items-start justify-evenly'>
                    <img src={curElem.image} style={{height:'50px'}}/>
                    <div >
                      <p style={{marginBlockStart:0,marginBlockEnd:0}}>{curElem.name}</p>
                      <p style={{marginBlockStart:0,marginBlockEnd:0}}>{curElem.color}</p>
                    </div>
                  </div>
                  
                  <p><FormatPrice price={curElem.price}/></p>
                  <div className='w-full lg:w-1/2'>
                  <ToggleAmount 
                  amount={curElem.amount} 
                  increaseAmount={()=> increaseAmount(curElem.id,curElem.stock)} 
                  decreaseAmount={()=> decreaseAmount(curElem.id)}/>
                  </div>
                  <p className='hidden lg:block'><FormatPrice price={curElem.amount * curElem.price}/></p>
                  <MdDelete style={{color:'red'}} onClick={()=>deleteCartItems(curElem.id)}/>
                </div>
              )
            })
          }
        </div>
        <hr style={{width:'100%'}}/>
        <div className='flex justify-between'>
          <NavLink to='/products'>
            <button className='bg-purple-700 px-4 py-2 uppercase text-xs text-white'>continue shopping</button>
          </NavLink>
          <button className='bg-orange-500 px-4 py-2 uppercase text-xs text-white lg:mr-20'>Clear cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart

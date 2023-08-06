import React from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'

const ToggleAmount = ({amount, increaseAmount, decreaseAmount}) => {
  
  return (
    <div className='flex items-center w-full justify-around'>
      <FaMinus onClick={decreaseAmount}/> 
      <p>{amount}</p>
      <FaPlus onClick={increaseAmount}/>
    </div>
  )
}

export default ToggleAmount

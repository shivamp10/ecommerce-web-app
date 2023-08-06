import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../../../helper/FormatPrice'

const ProductComp = (curElem) => {

  const {id, name, price, image, category} = curElem
  
  return (
    <NavLink
    to={`/singleproduct/${id}`} 
    className={`flex flex-col justify-between bg-white w-full h-max lg:w-60 lg:h-52 relative p-2 lg:p-3 items-end rounded-lg`}>
      <div className='w-full'>
        <div className='absolute bg-white top-5 right-5 px-3 py-1 rounded-full'>
          <p className='text-xs text-purple-700'>{category.toUpperCase()}</p>
        </div>
        <img src={image} className='w-full'/>
      </div>
      <div className='flex justify-between w-full' >
        <p>{name}</p>
        <p className='text-purple-700'><FormatPrice price={price}/></p>
      </div>
    </NavLink>
  )
}

export default ProductComp

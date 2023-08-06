import React from 'react'
import { NavLink } from 'react-router-dom'

const InfoSection = ({title}) => {
  return (
    <div className='grid m-8 gap-4 lg:m-20 lg:grid-cols-[30%_30%]  lg:gap-x-12 lg:justify-center'>
      <div className='lg:justify-self-end lg:pt-4 lg:w-11/12'>
        <p className='text-xs'>WELCOME TO</p>
        <p className='text-4xl font-semibold'>{title}</p>
        <p className=' text-sm mt-4 break-normal '>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</p>
        <NavLink to='/products'>
          <button className='mt-3 bg-purple-700 p-2 text-xs text-white font-medium'>SHOP NOW</button>
        </NavLink>
      </div>
      <div >
        <img className='lg:w-11/12' src={require('../Assets/shopping.jpg')} alt='shopping'/>
      </div>
    </div>
  )
}

export default InfoSection

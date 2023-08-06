import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LuShoppingCart } from 'react-icons/lu'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useCartContext } from '../Context/cartContext'

const NavBar = () => {

    const {...state } = useCartContext()
    const {cart} = {...state}

    
    const [menuActive, setMenu] = useState(false)
  return (
    <>
    <div
    className='flex justify-between px-12 py-5 items-center bg-gray-100 top-0 z-10' >
        <div>
            <p>Logo</p>
        </div>

        <AiOutlineMenu className={`${menuActive? `hidden`:`block`} lg:hidden`} onClick={()=>setMenu(true)}/>
        <AiOutlineClose className={`${menuActive? `block`:`hidden`}`}
        onClick={()=>setMenu(false)}/>
               
    
        <div className='hidden lg:block lg:w-[35%]'>
            <ul 
            className='lg:flex lg:justify-around items-center'>
                <NavLink to='/'>
                    <li className='font-medium'>Home</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='font-medium'>About</li>
                </NavLink>
                <NavLink to='/products'>
                    <li className='font-medium'>Products</li>

                </NavLink>
                <NavLink to='/contact'>
                    <li className='font-medium'>Contact</li>
                </NavLink>
                <NavLink to='/cart' className='text-2xl relative' onClick={()=>setMenu(false)}>
                    <LuShoppingCart />
                    <div className='bg-purple-500 absolute bottom-3 left-4 w-3 h-3 p-2 rounded-full flex items-center justify-center' >
                        <p className='text-xs font-medium'>{cart.length}</p>
                    </div>
                </NavLink>
            </ul>
        </div>
    </div>

<div className={`${menuActive? `flex` : `hidden`} w-full h-[70%] flex-col  justify-evenly items-center bg-white z-10 absolute`}>
    <NavLink to='/' onClick={()=>setMenu(false)}>
                Home
            </NavLink>
            <NavLink to='/about' onClick={()=>setMenu(false)}>
                About
            </NavLink>
            <NavLink to='/products' onClick={()=>setMenu(false)}>
                Products
            </NavLink>
            <NavLink to='/contact' onClick={()=>setMenu(false)}>
                Contact
            </NavLink>
            <NavLink to='/cart' className='text-2xl relative' onClick={()=>setMenu(false)}>
                <LuShoppingCart />
                <div className='bg-purple-500 absolute bottom-3 left-4 w-3 h-3 p-2 rounded-full flex items-center justify-center' >
                    <p className='text-xs font-medium'>{cart.length}</p>
                </div>
            </NavLink>
            
    </div>
    </>
  )
}

export default NavBar

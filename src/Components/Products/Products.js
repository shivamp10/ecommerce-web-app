import React, { createRef } from 'react'
import { useFilterContext } from '../../Context/filterContext'
import './Products.css'
import SortBar from './Components/SortBar'
import ProductComp from '../Home/Components/ProductComp'
import FilterSection from './Components/filterSection'


const Products = () => {
  const { 
    filterProducts,
   } = useFilterContext()
  
  return (
    <div className='grid grid-cols-[35%_60%] p-3 gap-x-2 lg:grid-cols-[15%_60%] lg:p-4 bg-gray-100 justify-center'>
      <div className='flex lg:justify-center'>
        <FilterSection/>
      </div>
      <div className='grid grid-rows-[5rem_1fr] lg:grid-rows-[3rem_1fr]'>
        <SortBar totalProducts ={[...filterProducts]}/>
        <div className='grid grid-cols-1 lg:grid-cols-[35%_35%_35%] justify-items-center lg:p-12 gap-y-12 overflow-y-scroll h-[30rem] lg:h-3/4 overflow-x-hidden'>
          {filterProducts.map((curElem)=>{
            return <ProductComp {...curElem} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Products

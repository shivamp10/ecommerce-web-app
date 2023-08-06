import React from 'react'
import { useProductContext } from '../../../Context/productContext'
import ProductComp from './ProductComp'



const FeatureSection = () => {
  const { featuredProducts, isLoading, isError} = useProductContext()
  if(isLoading){
    return(
      <div>
        <p>...loading</p>
      </div>
    )
  }
  else{
    return (
      <div className= ' flex justify-center bg-gray-100 lg:py-16 lg:px-20'>
        <div className=' m-8 lg:w-4/6'>
          <p className='text-xs text-purple-700'>CHECK NOW!</p>
          <p className='text-2xl font-medium'>Our Feature Services</p>
        
          <div className='grid gap-4 lg:grid-cols-3 mt-8 justify-items-center'>{featuredProducts.map((curElem)=>{
            return <ProductComp key={curElem.id} {...curElem} />
          })}
          </div>
        </div>
      </div>
    )
  }
}

export default FeatureSection

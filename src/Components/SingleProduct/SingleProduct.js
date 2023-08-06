import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/productContext'
import './SingleProductStyle.css'
import ProductImages from './ProductImages'
import FormatPrice from '.././../helper/FormatPrice'
import AddToCart from './Components/AddToCart'

const API = "https://api.pujakaitem.com/api/products"
const SingleProduct = () => {

  const { id } = useParams()

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  },[])

  const { isSingleLoading, isSingleError, singleProduct, getSingleProduct} = useProductContext()

  const {
    name,
    company,
    price,
    description,
    stock,
    reviews,
    stars,
    image,
    colors
  } = singleProduct;

  if(isSingleLoading){
    return <div>...loading</div>
  }
  return (
      <div className='grid px-4 py-8  lg:grid-cols-[40%_40%] lg:gap-x-[10%] lg:py-20 lg:px-40 justify-center'>
       <ProductImages image={image}/>

      <div className='space-y-3 mt-8'>
        <h1 className='text-3xl'>{name}</h1>
        <p >{stars}</p>
        <p className='font-medium'>MRP: 
          <del><FormatPrice price={price + 250000}/></del>
        </p>
        <p className='text-purple-700 font-medium'>Deal of the day: <FormatPrice price={price}/></p>
        <p className='break-words text-sm leading-6'>{description}</p>
        <p>Available: <span className='font-medium ml-2'>{stock ? "in stock" : "not in stock"}</span></p>
        <p>id: <span className='font-medium ml-2'>{id}</span></p>
        <p>Brand: <span className='font-medium ml-2'>{company}</span></p>
        <hr className='h-1'/>
        {stock > 0 && <AddToCart product={singleProduct}/>}
      </div>
    </div>
  )
}

export default SingleProduct

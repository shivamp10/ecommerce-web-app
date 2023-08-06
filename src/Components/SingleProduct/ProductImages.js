import React, { useState } from 'react'
import './SingleProductStyle.css'

const ProductImages = ({image}) => {

  const[mainImage, setMainImage] = useState("img")
  return (
    <div className='img-grid'>
            <div className='grid grid-rows-[repeat(4, minmax(0, 7rem))] items-center gap-y-4'>
                {image && image.map((curElem)=>{
                  return (
                      <img style={{width:'100%'}} src={curElem.url} onClick={()=>setMainImage(curElem)} key={curElem.id}/>
                  )
                })}
            </div>
            <div style={{alignSelf:'center'}}>
                {image && <img src={mainImage.url} style={{width:'100%'}}/>}
            </div>
    </div>
  )
}

export default ProductImages

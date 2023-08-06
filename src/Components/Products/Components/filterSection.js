import React, { useState } from 'react'
import { useFilterContext } from '../../../Context/filterContext'
import {FaCheck} from 'react-icons/fa'
import '../../SingleProduct/SingleProduct.css'
import FormatPrice from '../../../helper/FormatPrice'

const FilterSection = () => {
    const [activeCategory, setCategory ] = useState("All")
    const {
        filters: {text, maxPrice, minPrice, price},
        updateFilterValue,
        allProducts,
        clearFilters
    } = useFilterContext();
    

    const getUniqueData = (data, property) => {
        const uniqueData = data.map((curElem)=>{
            return curElem[property]
        })
        if(property==="colors"){
            return ["All",...new Set([].concat(...uniqueData))]
        }
        return ["All",...new Set(uniqueData)]
    }

    const categoryData = getUniqueData(allProducts, "category")
    const companyData = getUniqueData(allProducts,"company")
    const colorsData = getUniqueData(allProducts,"colors")

    const [activeColor, setActiveColor] = useState(colorsData[1])

  return (
    <div className='space-y-8'> 
        <div>
        <form onSubmit={(e)=> e.preventDefault()}>
            <input 
                type='text'
                name='text'
                value={text}
                placeholder='SEARCH'
                onChange={updateFilterValue}
                className='border border-gray-400 p-1 text-xs w-full'
            />
        </form>
        </div>
        <div className='flex flex-col '>
            <p className='font-medium'>Category</p>
            <div className='flex flex-col items-start'>
                {categoryData.map((curElem, index)=>{
                    return <div onClick={()=>{setCategory(curElem)}}>
                    <button className={`focus:text-purple-700 ${curElem===activeCategory?`border-b-2`:null} border-purple-700`}
                    key={index} 
                    style={{marginTop:'5px'}}
                    type='button'
                    name='category'
                    value={curElem}
                    onClick={updateFilterValue}>
                        {curElem}
                    </button>
                    </div>
                })}
            </div>
        </div>

        <div className=''>
            <p>Company</p>
            <form action='#' >
                <select className='mt-4 border border-gray-400 text-sm pl-2'
                name='company'
                onClick={updateFilterValue}
                >
                    {companyData.map((curElem,index)=>{
                        return <option key={index} value={curElem}>{curElem}</option>
                    })}
                </select>
            </form>
        </div>

        <div>
            <p>Colors</p>
            <div className='grid grid-cols-[25%_25%_25%] gap-y-3
            lg:flex lg:justify-around mt-3'>
            {colorsData.map((curElem,index)=>{
            return(
                <div className={activeColor===curElem?'colors-container active':'colors-container'} 
                onClick={()=> setActiveColor(curElem, index)}>
                    <button className='btn-colors' 
                    style={{backgroundColor:`${curElem}`}} 
                    key={index}
                    name='color'
                    value={curElem}
                    onClick={updateFilterValue}>
                        {curElem==="All"? "All" : null}
                    </button>
                    <FaCheck className={activeColor===curElem && activeColor!== "All"?'icon icon-active':'icon'}/>
                </div>
            )
            })}
            </div>
        </div>
        <div >
            <p>Price range</p>
            <form action='#' className='mt-3'>
                <p><FormatPrice price={price}/></p>
                <input className='w-[70%]' type='range' name='price' value={price} min={minPrice} max={maxPrice} onChange={updateFilterValue}/>
            </form>
        </div>
        <div onClick={()=>setCategory("All")}>
            <button className='bg-orange-500 px-4 py-2 text-xs font-medium' onClick={clearFilters}>CLEAR FILTERS</button>
        </div>
    </div>
  )
}

export default FilterSection

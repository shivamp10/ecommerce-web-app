import React from 'react'
import { useFilterContext } from '../../../Context/filterContext'

const SortBar = ({totalProducts}) => {

  const {sortProducts} = useFilterContext()
  return (
    <div className='flex flex-col items-center lg:flex-row justify-around '>
      <p>total products {totalProducts.length}</p>
      <div  style={{}}>
        <form action='#'> 
          <select className='border border-gray-400 text-sm pl-2 py-1 rounded' 
          name='sort' id='sort' onClick={sortProducts}>
            <option value='a-z' >{"a-z"}</option>
            <option value='z-a' >{"z-a"}</option>
            <option value='lowest' >{"Price(lowest)"}</option>
            <option value='highest' >{"Price(highest)"}</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default SortBar

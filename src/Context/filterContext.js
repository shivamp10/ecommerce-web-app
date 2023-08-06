import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer";
import {useProductContext} from './productContext'

const FilterContext = createContext()

const initialState = {
    filterProducts: [],
    allProducts: [],
    sortingValue: 'a-z',
    filters : {
        text: "",
        category: ["All"],
        company: ["All"],
        color: ["All"],
        minPrice: 0,
        maxPrice: 0,
        price: 0
    }
} 

const FilterProvider = ({ children }) => {

    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    const sortProducts = (event) =>{
        const sortVal = event.target.value
        dispatch({type: "SET_SORTING_VALUE", payload: sortVal})
    }

    const updateFilterValue = (event) => {
        const name = event.target.name
        const value = event.target.value
        dispatch({type: "SET_FILTER_VALUE", payload:{name, value}})
    }

    const clearFilters = () =>{
        dispatch({type: "CLEAR_FILTERS"})
    }

    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS" })
        dispatch({type: "SORT_PRODUCTS"})
    },[products,state.sortingValue,state.filters])
 
    useEffect(()=>{
        dispatch({type: "SET_PRODUCT_DATA", payload: products })
    },[products])


    return(
        <FilterContext.Provider value={{ ...state, sortProducts, updateFilterValue, clearFilters }} >
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterProvider, useFilterContext,}
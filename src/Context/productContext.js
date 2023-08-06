import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProduct: {}
}

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async(url) => {
        dispatch({type:"SET_LOADING"})
        try{
            const data = await fetch(url)
            const products = await data.json()
            dispatch({type:"SET_API_DATA", payload: products})
        }
        catch(error){
            dispatch({type:"API_ERROR"})
        }
    }

    const getSingleProduct = async(url) => {
        dispatch({type:"SET_SINGLE_LOADING"})
        try{
            const data = await fetch(url)
            const singleProducts = await data.json()
            dispatch({type:"SET_SINGLE_DATA", payload: singleProducts})
        }
        catch(error){
            dispatch({type:"SINGLE_API_ERROR"})
        }
    }

    useEffect(()=>{
        getProducts(API)
    },[])

    return (
        <AppContext.Provider value={{...state, getSingleProduct}}>
            {children}
        </AppContext.Provider>
    )
}

const useProductContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,useProductContext}
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const cartContext = createContext()

const getLocalData = () => {
    let localData = localStorage.getItem("shivamStore")
    
    const parsedData = JSON.parse(localData)
    if(!Array.isArray(parsedData)) return []
    return parsedData
}

const initialState = {
    cart: getLocalData(),
    totalItems: '',
    totalAmount: '',
    shippingFee: 50000
}

const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        localStorage.setItem("shivamStore",JSON.stringify(state.cart))
    },[state.cart])

    const addToCart= (id, amount, color, product) => {
        dispatch({type:"ADD_TO_CART",payload: {id, amount, color, product}})
    }

    const deleteCartItems = (id) => {
        dispatch({type:"DELETE_FROM_CART",payload: id})
    }

    const increaseAmount = (id,stock) => {
        dispatch({type:"INCREASE_AMOUNT",payload: {id,stock}})
    }

    const decreaseAmount = (id) => {
        dispatch({type:"DECREASE_AMOUNT",payload: id})
    }

    return <cartContext.Provider value={{...state,addToCart,deleteCartItems,increaseAmount,decreaseAmount}}>
        {children}
    </cartContext.Provider>
}

const useCartContext = () => {
    return useContext(cartContext)
}

export {CartProvider, useCartContext}
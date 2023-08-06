
const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            let {id, color, amount, product} = action.payload

            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                stock: product.stock
            }

            let productExist = state.cart.find((curElem)=>cartProduct.id===curElem.id)

            if(productExist){
                let newCart = state.cart.map((curElem)=>{
                    if(curElem.id === cartProduct.id){
                        let newAmount = curElem.amount + amount

                        if(newAmount>= curElem.stock){
                            newAmount = curElem.stock
                        }

                        return{
                            ...curElem,
                            amount: newAmount
                        }    
                    }
                    else{
                        return{
                            curElem
                        }
                    }
                })
                return{
                    ...state,
                    cart: newCart
                }
            }
            else{
                return{
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            }
        
        case "DELETE_FROM_CART":
            let item_id = action.payload
            let tempCart = [...state.cart]
            let newCart = tempCart.filter((curElem)=>{
                return curElem.id !== item_id
            })

            return{
                ...state,
                cart: newCart
            }
        
        case "INCREASE_AMOUNT":
          let updatedCart = state.cart.map((curElem)=>{
            const { id, stock } = action.payload
            if(curElem.id === id){
                let decAmount
                if(curElem.amount >= stock){
                    decAmount = stock
                }
                else{
                    decAmount = curElem.amount + 1
                }

                return{
                    ...curElem,
                    amount: decAmount
                }
            }
            else{
                return curElem
            }
          })

          return{
            ...state,
            cart: updatedCart
          }
        
        case "DECREASE_AMOUNT":
            let updatedCart2 = state.cart.map((curElem)=>{
                if(curElem.id === action.payload){
                    let decAmount
                    if(curElem.amount <= 1){
                        decAmount = 1
                    }
                    else{
                        decAmount = curElem.amount - 1
                    }
    
                    return{
                        ...curElem,
                        amount: decAmount
                    }
                }
                else{
                    return curElem
                }
              })
    
              return{
                ...state,
                cart: updatedCart2
              }

        default:
            return state
    }
}

export default cartReducer
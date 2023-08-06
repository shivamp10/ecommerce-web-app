
const filterReducer = (state, action) => {
    switch(action.type){
        case "SET_PRODUCT_DATA":

            let priceArr = action.payload.map((curElem)=>{
                return curElem.price
            })
            
            let maxPrice = Math.max(...priceArr)
            
            return{
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice}
            }

        case "SET_SORTING_VALUE":

            const sortVal = action.payload

            return{
                ...state,
                sortingValue: sortVal
            }

        case "SORT_PRODUCTS":
            const {filterProducts, sortingValue } = state
            let tempProducts = [...filterProducts]
            let sortedProducts

            function sortProducts(a, b){
                if(sortingValue === 'a-z'){
                    return a.name.localeCompare(b.name)
                }

                if(sortingValue === 'z-a'){
                    return b.name.localeCompare(a.name)
                }

                if(sortingValue === 'lowest'){
                    return a.price - b.price
                }

                if(sortingValue === 'highest'){
                    return b.price - a.price
                }
            }
            
            sortedProducts = tempProducts.sort(sortProducts)
           
            return{
                ...state,
                filterProducts: sortedProducts
            }
        
        case "SET_FILTER_VALUE":
            const {name, value} = action.payload
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name] : [value]
                }
            }

        case "FILTER_PRODUCTS":
            let { allProducts } = state
            let tempFilProducts = [...allProducts]
            const { text, category, company, color, price } = state.filters


            if(text){
                tempFilProducts = tempFilProducts.filter((curElem)=>{
                    return curElem.name.toLowerCase().includes(text)
                })
            }

            if(category[0] !== "All"){
                tempFilProducts = tempFilProducts.filter((curElem)=>{  
                    return curElem.category === category[0]
                })
            }

            if(company[0] !== "All"){
                tempFilProducts = tempFilProducts.filter((curElem)=>{
                    return curElem.company === company[0]
                })
            }

            if(color[0] !== "All"){
                tempFilProducts = tempFilProducts.filter((curElem)=>{
                    return curElem.colors.includes(color.toString())
                })
            }

            if(price){
                tempFilProducts = tempFilProducts.filter((curElem)=>{
                    return curElem.price <= price
                })
            }

            return{
                ...state,
                filterProducts: tempFilProducts
            }
        
        case "CLEAR_FILTERS":
            return{
                ...state,
                filters: {
                    text: "",
                    category: ["All"],
                    company: ["All"],
                    color: ["All"],
                    minPrice: 0,
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice
                }
            }
            
        default:
            return{
                state
            }
    }
}

export default filterReducer
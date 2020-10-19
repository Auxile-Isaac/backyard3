export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.Price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET": 
        // ADD TO basket LOGIC 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_TO_BASKET":
            // REMOVING TO BASKET LOGIC 

            // we cloned the basket 
            let newBasket = [...state.basket];

            // we checked if product exist 
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            if (index >= 0){

                // item exist in basket, remove it 
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    `cant remove product (id: ${action.id}) as is not in basket!`
                );
            }
            return {
                ...state, 
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;
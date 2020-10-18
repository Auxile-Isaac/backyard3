export const initialState = {
    basket: [],
    user: null,
};

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
            return {state}
        default:
            return state;
    }
}

export default reducer;
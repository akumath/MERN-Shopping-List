import * as actionType  from "../actionTypes/types"

const initialState = {
    items: [
        { id: 1, name: 'Egg' },
        { id: 2, name: 'Apple' },
        { id: 3, name: 'Orange' }
    ]
}

const itemReducer = (state = initialState, action) => {
    console.log(state)
    console.log(action.payload)
    switch(action.type) {
        case actionType.GET_ITEMS: return {
            ...state,

        }
        case actionType.Add_ITEM: return {
            ...state,
            items: [action.payload, ...state.items]
        }
        case actionType.DELETE_ITEM: return {
            ...state,
            items: state.items.push(item => item.id !== action.payload)
        }
        default: return state;
    }
}

export default itemReducer;
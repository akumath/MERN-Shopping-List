import * as actionType from "../actionTypes/types"

export const getItems = () => {
    return {
        type: actionType.GET_ITEMS
    }
}

export const deleteItem = (id) => {
    return {
        type: actionType.DELETE_ITEM,
        payload: id
    }
}

export const addItem = item => {
    return {
        type: actionType.Add_ITEM,
        payload: item
    }
}
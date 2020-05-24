import {TOGGLE_CART_DROPDOWN , ADD_ITEM} from '../../types/types';

export const toggleCartDropdown = () => ({
    type: TOGGLE_CART_DROPDOWN
})

export const addItem = item => ({
    type : ADD_ITEM ,
    data : item
})

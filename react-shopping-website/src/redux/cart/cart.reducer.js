import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from '../../types/types';
import { addItemsToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: 'true',
    cartItems : []
}

const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case ADD_ITEM : 
        return {
            ...state,
            cartItems : addItemsToCart(state.cartItems , action.data)
        }
        default:
            return state
    }

}

export default CartReducer;
import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.styles.css';
import { ReactComponent as ShoppingIcon } from '../assets/bag.svg';
import {toggleCartDropdown} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartDropdown}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
})

export default connect(null,mapDispatchToProps)(CartIcon);
import React from 'react';
import { ReactComponent as Logo } from '../assets/victoriasSecretLogo.svg'
import { Link } from 'react-router-dom';
import './header.styles.css';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? 
                null : 
                <CartDropdown />
            }

        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
import React from 'react';
import { ReactComponent as Logo } from '../assets/victoriasSecretLogo.svg'
import { Link } from 'react-router-dom';
import './header.styles.css';
import { auth } from '../firebase/firebase.utils';


const Header = ({ currentUser }) => {
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
            </div>
        </div>
    )
}

export default Header;
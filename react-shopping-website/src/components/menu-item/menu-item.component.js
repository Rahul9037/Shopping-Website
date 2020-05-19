import React from 'react';
import './menu-item.styles.css'

const MenuItem = ({title,size,url}) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{
            backgroundImage : `url(${url})`
        }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subitle">SHOP NOW</span>
            </div>
        </div>  
    );
}

export default MenuItem;
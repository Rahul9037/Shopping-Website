import React from 'react';
import './collection-item.styles.css';
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ name, imageUrl, price }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage : `url(${imageUrl})`}}/>
            {/* <div className="button">ADD TO CART</div> */}
            <CustomButton >ADD TO CART</CustomButton>
            <div className="collection-footer">
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    ${price}
                </div>
            </div>
        </div>
    )
}

export default CollectionItem;
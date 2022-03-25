import React from 'react';
import './Flower.css'

const Flower = props => {
    console.log(props)
    const { name, price, id, img } = props.flowerData;

    return (
        <div className='flowers-card'>
            <img src={img} alt="" />
            <div className="image-info">
                <h2>{name}</h2>
                <h4>Price : $ {price}</h4>
            </div>
            <button className='buy-flower'>
                <p>Buy This</p>
            </button>
        </div>
    );
};

export default Flower; 
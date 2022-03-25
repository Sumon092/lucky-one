import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
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
                <p className='btn-text'>Buy This</p>
                <BsFillCartFill className='icon'></BsFillCartFill>
            </button>
        </div>
    );
};

export default Flower; 
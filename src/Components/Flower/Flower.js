import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import './Flower.css'

const Flower = (props) => {
    // console.log(props)
    const { handleAddToCart } = props.handleAddToCart;
    const { name, price, img } = props.flowerData;
    // console.log(props)
    return (
        <div className='flowers-card'>
            <img src={img} alt="" />
            <div className="image-info">
                <h2>{name}</h2>
                <h4>Price : $ {price}</h4>
            </div>

            <button onClick={() => props.handleAddToCart(props.flowerData)} className='buy-flower'>
                <p className='btn-text'>Add To Cart</p>
                <BsFillCartFill className='icon'></BsFillCartFill>
            </button>

        </div>
    );
};

export default Flower; 
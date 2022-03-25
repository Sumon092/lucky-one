import React from 'react';
import './Flower.css'

const Flowers = (props) => {
    console.log(props);
    const { name, price, img } = props.data;
    return (
        <div>
            <h2>Flowers Heaven</h2>
            <p><small>First Online Flowers Delivery Shop</small></p>
            <div className='card'>
                <div className='image-container'>
                    <img src={img} alt="" />
                </div>
                <h1>Name: {name}</h1>
                <p>Price : $ {price}</p>
            </div>
        </div>
    );
};

export default Flowers;
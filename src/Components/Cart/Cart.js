import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { img, name, price, id } = props.cart;

    return (

        <div className='cart-flower'>
            <div className='cartThumbnail'>
                <img src={img} alt="" />
            </div>
            <p className>Name: {name}</p>
            <p>Price: $ {price}</p>
        </div>
    );
};

export default Cart;
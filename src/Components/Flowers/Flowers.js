import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Flower from '../Flower/Flower';
import './Flowers.css'

const Flowers = () => {
    const [flowers, setFlowers] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)

    const handleAddToCart = flower => {
        const newCart = [...cart, flower]
        console.log(newCart);
        setCart(newCart);
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFlowers(data))
    }, []);

    return (
        <div className='flowers'>
            <div className='flowers-container'>
                {
                    flowers.map((flower) => (<Flower
                        key={flower.id}
                        flowerData={flower}
                        handleAddToCart={handleAddToCart}

                    ></Flower>))
                }
            </div>
            <div className='selected-flowers'>
                <h2>Selected Flowers</h2>
                {
                    cart.map((item) => <Cart cart={item} key={item.id}></Cart>)
                }


            </div>
        </div>
    );
};

export default Flowers;
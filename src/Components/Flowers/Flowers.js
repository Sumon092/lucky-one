import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Flower from '../Flower/Flower';
import RandomSelect from '../RandomSelect/RandomSelect';
import './Flowers.css'

const Flowers = () => {
    const [flowers, setFlowers] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectOne, SetSelectOne] = useState([]);
    const [isDuplicate, setIsDuplicate] = useState(false);
    console.log(cart)

    const handleAddToCart = flower => {
        const duplicate = cart.find((c) => c.id === flower.id)
        if (duplicate) {
            setIsDuplicate(true);
        }
        else {
            const newCart = [...cart, flower]
            setCart(newCart);
        }
    }


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFlowers(data))
    }, []);


    const removeItems = () => {

        setCart([]);
    }
    const chooseRandom = () => {
        const choose = Math.floor(Math.random(cart.length) * cart.length);
        const chooseItem = cart[choose];
        console.log(chooseItem);
        SetSelectOne(chooseItem);
        alert(chooseItem.name)
    }

    const hadleCart = () => {
        const newCart = []
        setCart = newCart;
    }

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
                <h1>Selected Flowers</h1>
                {
                    cart.map((item) => <Cart cart={item} key={item.id}></Cart>)
                }

                {
                    <div><RandomSelect choose={selectOne}></RandomSelect></div>
                }
                {
                    <button className='select-one-button' onClick={chooseRandom}>CHOOSE ONE</button>
                }
                {
                    <button className='select-one-button' onClick={removeItems}>
                        CHOOSE AGAIN
                    </button>
                }


            </div>
        </div>
    );
};

export default Flowers;
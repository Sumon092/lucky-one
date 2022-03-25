import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import './Flowers.css'

const Flowers = () => {
    const [flowers, setFlowers] = useState([]);
    console.log(flowers)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFlowers(data))
    }, [])
    return (
        <div className='flower'>
            <div className='flowers-container'>
                <h1>this is flower container</h1>
                {
                    flowers.map((flower) => (<Flower key={flower.id} flowerData={flower}></Flower>))
                }
            </div>
            <div className='selected-flowers'>
                <h2>this is selected products container</h2>
            </div>
        </div>
    );
};

export default Flowers;
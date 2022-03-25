
import { useEffect, useState } from 'react';
import './App.css';
import Flowers from './Flowers/Flowers';

function App() {
  const [flowers, setFlowers] = useState([]);
  console.log(flowers);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setFlowers(data));
  }, []);

  return (
    <div className='card-container'>
      {
        flowers.map((flower) => (<Flowers key={flower.id} data={flower}></Flowers>))
      }

    </div>
  );
}

export default App;

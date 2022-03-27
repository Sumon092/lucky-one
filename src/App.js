import './App.css';
import Cart from './Components/Cart/Cart';
import Flowers from './Components/Flowers/Flowers';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';


function App() {


  return (
    <div className='App'>
      <Header></Header>
      <Flowers></Flowers>
      <Question></Question>

    </div>
  );
}

export default App;

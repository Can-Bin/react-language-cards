import './App.css';
import Card from './components/card/Card';
import Data from './helper/Data'
import {useState} from 'react'
import react from './assets/react.svg';

function App() {

  return (
    <div className='App-container'>
      <img src={react} alt={react} className='reactSvg' />
      <div className="App">
        <h1>Languages</h1>
        <div className="card-container">
          {
            Data.map((card) => (
              <Card key={card.name} name={card.name} img={card.img} options={card.options}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;

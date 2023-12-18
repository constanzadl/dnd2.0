import './App.css';
import Game from './game';
import { useState } from 'react';
function App() {

  const [playing, setPlaying] = useState(false)

  return (
    <div className="App">
      <p>Dice and Duels</p>
      
      <br/>
      <button onClick={()=> {setPlaying(!playing)}}>Start</button>
      {playing ? <Game /> : <></> }
      
    </div>
  );
}

export default App;

import './App.css';
import Game from './game';
import { useState } from 'react';
function App() {

  const [playing, setPlaying] = useState(false)

  return (
    <div className="App">
      <p className="gametitle">Dice and Duels</p>
      <br/>
      <button className="startbtn" onClick={()=> {setPlaying(!playing)}}>Start</button>
      {playing ? <Game /> : <></> }
      
    </div>
  );
}

export default App;

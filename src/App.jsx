import React, { useState } from 'react'
import Player from './components/Player';
import './styles/App.css'

function App() {
  const [name, setName] = useState('Matvei')

  return (
    <div className="App">
      <Player name={name}/>
      <Player name={"Sergey"}/>
      <Player name={"Grandma"}/>
      <Player name={"Inna"}/>
    </div>
  );
}

export default App;

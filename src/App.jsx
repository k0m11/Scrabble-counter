import React, { useState } from 'react'
import PlayersSection from './components/PlayersSection';
import './styles/App.css'

function App() {
  const  [names, setNames] = useState(["matvei","andrew","michael", "dimaWWW",])

  return (
    <div className="App">
      <PlayersSection names = {names}/>
    </div>
  );
}

export default App;

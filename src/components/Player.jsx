import React, { useState } from 'react'
import data from "./Data/Data.js"

export default function Player({ name }) {

    const [input, setInput] = useState("")
    const [points, setPoints] = useState(56)

    function addPoints(e) {
        e.preventDefault()
        if (input.toUpperCase() === input.toLowerCase()) return setInput("");
        let newWord = input.toUpperCase().split("")
        let wordPoints = 0
        for (let i = 0; i < input.length; i++) {
            wordPoints += data[newWord[i]]
        }
        setPoints(points + wordPoints)
        setInput("")
    }

  return (
    <div className="player">
        <h1>{name}</h1>
        <h1>Total: {points}</h1>
        <form onSubmit={"return false"}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addPoints}>Add</button>
        </form>
    </div>
  )
}

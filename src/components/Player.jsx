import React, { useState } from 'react'
import data from "./Data/Data.js"

export default function Player({ name }) {

    const [input, setInput] = useState("")
    const [points, setPoints] = useState(0)
    const [isDoubleWord, SetIsDoubleWord] = useState(false)
    const [isTripleWord, SetIsTripleWord] = useState(false)

    function addPoints(e) {
        e.preventDefault()
        if (input.toUpperCase() === input.toLowerCase()) return setInput("");
        let newWord = input.toUpperCase().split("")
        let wordPoints = 0
        for (let i = 0; i < input.length; i++) {
            wordPoints += data[newWord[i]]
        }
        checkExtraOptions(wordPoints);
        
        if (isDoubleWord || isTripleWord) {
            setInput("")
        }
        else {
            setPoints(points + wordPoints)
            setInput("")
        }
    }

    function changeDoubleWord() {
        SetIsDoubleWord(D => !D)
    }
    function changeTripleWord() {
        SetIsTripleWord(D => !D)
    }

    function checkExtraOptions(points) {
        if (isDoubleWord) {
            doubleWord(points)
            SetIsDoubleWord(false)
        }
        if (isTripleWord) {
            tripleWord(points)
            SetIsTripleWord(false)
        }
    }

    function doubleWord(wordPoints) {
        setPoints(points + wordPoints * 2)
    }
    function tripleWord(wordPoints) {
        setPoints(points + wordPoints * 3)
    }

  return (
    <div className="player">
        <h1>{name}</h1>
        <h1>Total: {points}</h1>
        <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addPoints}>Add</button>
        </form>
        <input type="checkbox" checked={isDoubleWord} onChange={changeDoubleWord} />
        <span>Double word</span>
        <input type="checkbox" checked={isTripleWord} onChange={changeTripleWord} />
        <span>Triple word</span>
    </div>
  )
}
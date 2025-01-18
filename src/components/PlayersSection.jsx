import React from 'react'
import Player from './Player'

export default function PlayersSection({ names }) {
  return (
    <div className='players-section'>
        {names.map(x => 
            <Player name={x} key={x} />
        )}
    </div>
  )
}

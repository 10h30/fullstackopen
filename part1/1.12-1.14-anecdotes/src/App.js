import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  
  console.log(points)

  const setRandom = () => {
    const min = 0
    const max = anecdotes.length-1
    const random = Math.floor(Math.random() * (max-min+1)) + min
    //console.log(random)
    setSelected(random)
  }

  const setVote = () => {
    const newpoints = [...points]
    newpoints[selected] += 1
    setPoints(newpoints)
  }

  const Best = (props) => {
    const best = props.data
    const mostvote = Math.max(...best)
    const index = best.indexOf(mostvote);
    return (
      <div>
      <h2>Anecdote with most votes</h2>
        <p>{props.notes[index]}</p>
        <span>has {mostvote} votes</span>
      </div>
    )
  }
  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={setVote}>vote</button><button onClick={setRandom}>Next Anecdote</button>
      </div>
      
        <Best data={points} notes={anecdotes}/>

      
    </div>
  )
}

export default App
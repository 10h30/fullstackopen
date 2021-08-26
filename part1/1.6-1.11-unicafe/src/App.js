import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const Statistics = (props) => {
      const [good, neutral, bad] = props.data
      const all = good + bad + neutral
      const avg = (all !== 0) ? (good - bad) / all : 0 
      const positive =  (all !== 0) ? good/all*100 + " %": "NA"
      

      return (
        <div>
          <h1>Statistic</h1>
          {all > 0 &&
            <table>
              <tbody>
              <StatisticLine text="Good" value ={good} />
              <StatisticLine text="Neutral" value ={neutral} />
              <StatisticLine text="Bad" value ={bad} />
              <StatisticLine text="All" value ={all} />
              <StatisticLine text="Average" value ={avg} />
              <StatisticLine text="Positive" value ={positive} />
              </tbody>
            </table>
          }
          {all === 0 && "No feedback given"}
        </div>
      )
  }

  const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>{props.text}</button>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />

      <Statistics data={[good, neutral, bad]}/>
     
    </div>
  )
}

export default App
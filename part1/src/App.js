import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} excercise={exercises1} />
      <Content part={part2} excercise={exercises2} />
      <Content part={part3} excercise={exercises3} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.excercise}</p>
    </div>
   
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    //<p>1</p>
  )
}

export default App
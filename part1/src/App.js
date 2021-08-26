import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={[part1,part2,part3]} />
      <Total part={[part1,part2,part3]} />
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
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </div>
   
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
  )
}

export default App
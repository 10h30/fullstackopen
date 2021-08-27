import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div><h1>Web Development Curriculum</h1>
    {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}
 
const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h2>{props.course.name}</h2>
  )
}

const Content = (props) => {
  //console.log(props)
  return (
    <div>
       {props.part.map(part => 
          <Part key={part.id} part={part} />
        )}
    </div>
   
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Total = ({part}) => {
  const total = part.reduce((sum, p) => sum + p.exercises, 0)
  return (
    <p><strong>Total of exercises {total}</strong></p>
  )
}

export default App
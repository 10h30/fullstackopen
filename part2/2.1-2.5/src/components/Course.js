import React from 'react';

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

  export default Course
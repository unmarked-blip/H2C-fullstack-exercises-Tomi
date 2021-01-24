import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}  

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.numbers}</p>
  )
}

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total numbers={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
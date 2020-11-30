import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name= {props.kurssi.parts[0].name} maara= {props.kurssi.parts[0].exercises} />
      <Part name= {props.kurssi.parts[1].name} maara= {props.kurssi.parts[1].exercises} />
      <Part name= {props.kurssi.parts[2].name} maara= {props.kurssi.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name}, {props.maara}
      </p>
    </div>
  )
}
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


  return (
    <div>
        <Header course={course} />
        <Content kurssi={course} />
        <Total total= {course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
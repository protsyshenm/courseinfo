const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  } 

  return <Course course={course}/>

}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = (props) => {
  let totalExercises = 0;
  props.parts.forEach(part => {
    totalExercises += part.exercises
  })
  return (
    <p><b>total of {totalExercises} exercises</b></p>
  )
}

export default App
const Header = (props) => {
  return (
    <p>{props.course.name}</p>
  )
}

const Part = (props) => {
  // console.log(props);
  return (
    <>
      <span>{props.name} - </span>
      <span>{props.exercises}</span>
      <br />
    </>
  )
}

const Content = (props) => {
  // console.log(props.course);
  return (
    <>
    {props.course.parts.map(course => <Part key={course.name} name={course.name} exercises={course.exercises} />)}
    </>
  )
}

const Total = (props) => {
  // console.log(props.course);
  const sumOfExercises = props.course.parts.reduce((total, part) => part.exercises + total, 0)
  return (
    <p>
      Sum: {sumOfExercises}
    </p>
  )
}

function App() {
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
      <Content 
        course={course}
      />
  
      <Total course={course} />
    </div>
  );
}

export default App;

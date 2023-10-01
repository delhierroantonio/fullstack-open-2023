const Part = (props) => {
  console.log(props);
  return (
    <>
      <span>{props.name} - </span>
      <span>{props.exercises}</span>
      <br />
    </>
  )
}

const Content = (props) => {
  console.log(props.course);
  return (
    <>
    {props.course.map(course => <Part key={course.name} name={course.name} exercises={course.exercises} />)}
    </>
  )
}

export default Content
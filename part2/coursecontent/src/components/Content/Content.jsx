import Part from '../Part/Part'

const Content = (props) => {
  // console.log(props.course)
  return (
    <>
      {props.course.parts.map(course => <Part key={course.name} name={course.name} exercises={course.exercises} />)}
    </>
  )
}

export default Content

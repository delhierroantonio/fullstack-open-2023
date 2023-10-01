
const Total = (props) => {
  // console.log(props.course);
  const sumOfExercises = props.course.parts.reduce((total, part) => part.exercises + total, 0)
  return (
    <p>
      Sum: {sumOfExercises}
    </p>
  )
}

export default Total;
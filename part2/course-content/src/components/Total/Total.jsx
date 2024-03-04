const Total = (props) => {
  const sumOfExercises = props.course.parts.reduce((total, part) => part.exercises + total, 0)
  return (
    <strong>
      - Total of exercises: {sumOfExercises}
    </strong>
  )
}

export default Total

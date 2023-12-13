
const TotalExercises = ({ parts }) => {
  // console.log(parts);
  const totalNum = parts.reduce((acc, parts) => acc + parts.exercises, 0)
  // console.log(totalNum);
  return (
    <em>Total exercises: {totalNum}</em>
  )
}

export default TotalExercises
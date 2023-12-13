
const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(part => (
        <p key={part.id}>{part.name}: <span>{part.exercises}</span></p>
      ))}
    </>
  )
}
// const Content = ({ part }) => {
//   return (
//     <>
//       <p>{part.name}: <span>{part.exercises}</span></p>
//     </>
//   )
// }

export default Content
import Content from "./Content"
import Header from "./Header"
import TotalExercises from "./TotalExercises"


const Course = ({ courses }) => {
  
  return (
    <>
     {courses.map(course => (
      <div key={course.id}>
        <Header course={course.name} />
        <Content course={course} />
        <TotalExercises parts={course.parts} />
      </div>
     ))}
    </>
  )
}
// const Course = ({ course }) => {
  
//   return (
//     <>
//       <Header course={course.name} />
//       {course.parts.map(part => (
//         <div key={part.id}>
//           <Content part={part} />
//         </div>
//       ))}
//       <TotalExercises parts={course.parts} />
//     </>
//   )
// }

export default Course
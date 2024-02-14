// modules
import { Header, Content, Total } from '../index'

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course, i) => {
        return (
          <div key={i}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        )
      })}
      {/* <Header course={course} />
      <Content
        course={course}
      />
      <Total course={course} /> */}
    </>
  )
}

export default Course

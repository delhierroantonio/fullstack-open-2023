// modules
import Course from './components/Course/Course'
// styles
import './App.css'

function App () {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Next.js',
      id: 2,
      parts: [
        {
          name: 'Server Side Rendering',
          exercises: 12,
          id: 1
        },
        {
          name: 'Routing',
          exercises: 4,
          id: 2
        }
      ]
    }
  ]
  return (
    <>
      <Course courses={courses} />
    </>
  )
}

export default App

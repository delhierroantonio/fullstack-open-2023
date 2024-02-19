import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Note from './components/Note/Note'

function App () {
  // const [notes, setNotes] = useState(props.notes)
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(res => {
        const notes = res.data
        console.log('promise fulfilled')
        setNotes(notes)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const handleAddNote = (e) => {
    e.preventDefault()
    // console.log('Button clicked', e.target)

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const noteToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={handleAddNote}>
        <fieldset>
          <legend>Add a new note</legend>
          <label htmlFor='note'>
            New note: <input type='text' placeholder='Sample text' value={newNote} onChange={(e) => setNewNote(e.target.value)} />
          </label>
          <button type='submit'>Add</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App

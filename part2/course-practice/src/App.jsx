import { useState } from 'react'
import './App.css'
// modules
import Note from './components/Note/Note'

function App (props) {
  // const [notes, setNotes] = useState(props.notes)
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

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
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
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

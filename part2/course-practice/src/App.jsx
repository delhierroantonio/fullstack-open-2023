import { useEffect, useState } from 'react'
import Note from './components/Note/Note'
import Notification from './components/Notification/Notification'
// notes service module
import noteService from './services/notes.js'
import './App.css'

function App () {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
      .catch(error => {
        console.log(`Failed, error: ${error}`)
      })
  }, [])

  const handleAddNote = (e) => {
    e.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
      // id: notes.length + 1
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        console.log(returnedNote)
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleNoteimportance = id => {
    const note = notes.find(note => note.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        console.log(returnedNote)
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMsg(
          `Note '${note.content}' was already removed from server, details: ${error}`
        )
        setTimeout(() => {
          setErrorMsg(null)
        }, 1000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const noteToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
      </div>
    )
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMsg} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleNoteimportance={() => toggleNoteimportance(note.id)}
          />
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
      <Footer />
    </div>
  )
}

export default App

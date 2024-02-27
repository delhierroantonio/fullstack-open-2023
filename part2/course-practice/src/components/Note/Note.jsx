import React from 'react'

const Note = ({ note, toggleNoteimportance }) => {
  const label = note.important
    ? 'Make NOT important'
    : 'Make important'
  return (
    <>
      <li className='note'>{note.content}</li>
      <button onClick={toggleNoteimportance}>{label}</button>
    </>
  )
}

export default Note

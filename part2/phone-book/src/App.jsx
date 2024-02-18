import { useState } from 'react'
import './App.css'
import { AddNewContact, Filter, Contacts } from './components/index.js'
function App () {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameToFilter, setNameToFilter] = useState('')

  return (
    <>
      <h1>Phonebook</h1>
      <Filter setNameToFilter={setNameToFilter} />
      <AddNewContact
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} nameToFilter={nameToFilter} />
    </>
  )
}

export default App

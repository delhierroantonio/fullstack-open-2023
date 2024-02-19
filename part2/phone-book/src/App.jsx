import { useState, useEffect } from 'react'
import './App.css'
import { AddNewContact, Filter, Contacts } from './components/index.js'
import axios from 'axios'

function App () {
  const baseUrl = 'http://localhost:3001/persons'

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(res => {
        const notes = res.data
        setPersons(notes)
      })
  }, [])

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

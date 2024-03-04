import { useState, useEffect } from 'react'
import './index.css'
import { AddNewContact, Filter, Contacts } from './components/index.js'
import Notification from './components/Notification/Notification.jsx'
import axios from 'axios'
import contactService from './services/contacts.js'

function App () {
  const baseUrl = 'http://localhost:3001/persons'
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameToFilter, setNameToFilter] = useState('')

  const [errorMsg, setErrorMsg] = useState(null)

  // fetch all contacts
  useEffect(() => {
    axios
      .get(baseUrl)
      .then(res => {
        const notes = res.data
        setPersons(notes)
      })
  }, [])

  const contactObject = {
    name: newName,
    phone: newPhone
  }

  const handleAddContact = (e) => {
    e.preventDefault()
    const duplicatedPerson = persons.find(person => person.name === newName)
    if (duplicatedPerson) {
      if (window.confirm(`The contact: "${duplicatedPerson.name}" has been already added, do you want to update the number?`) === true) {
        contactService
          .updateContact(duplicatedPerson.id, contactObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== duplicatedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewPhone('')
            setErrorMsg({
              text: `Updated ${returnedPerson.name}`,
              type: 'notification'
            })
            setTimeout(() => {
              setErrorMsg(null)
            }, 1400)
          })
          .catch(error => {
            setErrorMsg({
              text: `Failed, the contact ${duplicatedPerson.name} has already been removed, details: ${error}`,
              type: 'error'
            })
            setTimeout(() => {
              setErrorMsg(null)
            }, 1900)
          })
      }
    } else {
      contactService
        .createNote(contactObject)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewPhone('')
          setErrorMsg({
            text: `Created ${returnedContact.name}`,
            type: 'notification'
          })
          setTimeout(() => {
            setErrorMsg(null)
          }, 1400)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  const handleRemove = (id) => {
    if (window.confirm(`Do you really want to delete the contact with id: ${id}`)) {
      contactService
        .deleteNote(id)
        .then(returnedContact => {
          setPersons(persons.filter(person => person.id !== returnedContact.id))
          setErrorMsg({
            text: `Removed ${returnedContact.name}`,
            type: 'error'
          })
          setTimeout(() => {
            setErrorMsg(null)
          }, 1400)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <>
      <h1>Phonebook</h1>
      <Notification message={errorMsg} />
      <Filter setNameToFilter={setNameToFilter} />
      <AddNewContact
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        handleAddContact={handleAddContact}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} setPersons={setPersons} nameToFilter={nameToFilter} handleRemove={handleRemove} />
    </>
  )
}

export default App

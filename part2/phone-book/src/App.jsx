import { useState, useEffect } from 'react'
import './App.css'
import { AddNewContact, Filter, Contacts } from './components/index.js'
import axios from 'axios'
import contactService from './services/contacts.js'

function App () {
  const baseUrl = 'http://localhost:3001/persons'
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameToFilter, setNameToFilter] = useState('')

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
    // const person = persons.filter(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
    const duplicatedPerson = persons.find(person => person.name === newName)
    if (duplicatedPerson) {
      if (window.confirm(`The contact: "${duplicatedPerson.name}" has been already added, do you want to update the number?`) === true) {
        contactService
          .updateContact(duplicatedPerson.id, contactObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== duplicatedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewPhone('')
          })
          .catch(error => {
            console.log(error)
          })
      }
    } else {
      contactService
        .createNote(contactObject)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewPhone('')
          console.log(`The contact has been created: ${returnedContact.id}`)
        })
        .catch(error => {
          console.log(error)
        })
    }
    // if (person.length < 1) {
    //   // setPersons(persons.concat(contactObject))
    //   contactService
    //     .createNote(contactObject)
    //     .then(returnedContact => {
    //       setPersons(persons.concat(returnedContact))
    //       setNewName('')
    //       setNewPhone('')
    //       console.log(`The contact has been created: ${returnedContact.id}`)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // } else {
    //   alert(`The contact "${newName}" has already been added to the Phonebook!`)
    //   setNewName('')
    //   setNewPhone('')
    // }

    // const duplicatedContact = persons.filter(person => person.name === newName)
    // if (duplicatedContact) {
    //   if (window.confirm(`The contact: ${newName} has already been added to the phonebook, do you want to replace it?`) === true) {
    //     contactService
    //       .updateContact(duplicatedContact.id, contactObject)
    //       .then(returnedContact => {
    //         setPersons(persons.map(person => person.id !== duplicatedContact.id ? person : returnedContact))
    //         console.log(returnedContact)
    //       })
    //   } else {
    //     contactService
    //       .createNote(contactObject)
    //       .then(res => {
    //         setPersons(persons.concat(res))
    //         setNewName('')
    //         setNewPhone('')
    //         console.log(`The contact has been created: ${res.id}`)
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }
    // }
  }

  const handleRemove = (id) => {
    if (window.confirm(`Do you really want to delete the contact with id: ${id}`)) {
      contactService
        .deleteNote(id)
        .then(returnedContact => {
          setPersons(persons.filter(person => person.id !== returnedContact.id))
          console.log(returnedContact.id)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

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
        handleAddContact={handleAddContact}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} setPersons={setPersons} nameToFilter={nameToFilter} handleRemove={handleRemove} />
    </>
  )
}

export default App

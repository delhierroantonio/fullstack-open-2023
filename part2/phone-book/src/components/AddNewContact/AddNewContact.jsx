const AddNewContact = ({ persons, setPersons, newName, setNewName, newPhone, setNewPhone }) => {
  const contactObject = {
    name: newName,
    phone: newPhone
  }

  const handleAddContact = (e) => {
    e.preventDefault()

    const person = persons.filter(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
    if (person.length < 1) {
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewPhone('')
    } else {
      alert(`The contact "${newName}" has already been added to the Phonebook!`)
      setNewName('')
      setNewPhone('')
    }
  }
  return (
    <>
      <h2>Add a new contact to the phonebook</h2>
      <form onSubmit={handleAddContact}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='phone'>Phone Number: </label>
          <input type='tel' value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
        </div>
        <div>
          <button type='submit'>Add To Phonebook</button>
        </div>
      </form>
    </>
  )
}

export default AddNewContact

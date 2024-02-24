// import contactService from '../../services/contacts.js'

const Contacts = ({ persons, setPersons, nameToFilter, handleRemove }) => {
  return (
    <>
      {/* {persons.map(person => (
        <div key={person.name}>
          <p> - <span>{person.name}</span> <span>{person.phone}</span></p>
        </div>
      ))} */}
      {
      persons.filter(item => {
        return nameToFilter.toLowerCase() === ''
          ? item
          : item.name.toLowerCase().includes(nameToFilter.toLowerCase())
      })
        .map(item => (
          <div key={item.name}>
            - <span>{item.name}</span> - <span>{item.phone}</span>
            <button onClick={() => handleRemove(item.id)}>Delete</button>
          </div>
        ))
    }
    </>
  )
}

export default Contacts

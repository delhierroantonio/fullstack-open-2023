const Contacts = ({ persons, nameToFilter }) => {
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
          </div>
        ))
    }
    </>
  )
}

export default Contacts

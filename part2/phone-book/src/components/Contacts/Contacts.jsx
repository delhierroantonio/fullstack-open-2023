const Contacts = ({ persons, setPersons, nameToFilter, handleRemove }) => {
  return (
    <>
      {
      persons.filter(item => {
        return nameToFilter.toLowerCase() === ''
          ? item
          : item.name.toLowerCase().includes(nameToFilter.toLowerCase())
      })
        .map(item => (
          <div key={item.name}>
            {/* chenged item.phone to item.number below */}
            - <span>{item.name}</span> - <span>{item.number}</span>
            <button style={{ cursor: 'pointer', margin: '10px' }} onClick={() => handleRemove(item.id)}>Delete</button>
          </div>
        ))
    }
    </>
  )
}

export default Contacts

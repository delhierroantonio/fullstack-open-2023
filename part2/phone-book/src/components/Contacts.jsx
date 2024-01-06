const Contacts = ({ contacts, nameToFilter }) => {
  return (
    <>
      {
        contacts.filter(item => {
          return nameToFilter.toLowerCase() === ''
          ? item
          : item.name.toLowerCase().includes(nameToFilter);
        })
        .map(item => (
          <div key={item.name}>
            <span key={item.name}>{item.name}</span> - <span key={item.phone}>{item.phone}</span>
          </div>
        ))
      }
    </>
  )
}

export default Contacts
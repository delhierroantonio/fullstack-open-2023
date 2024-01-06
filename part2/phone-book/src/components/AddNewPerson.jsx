
const AddNewPerson = ({ persons, setPersons, newName, setNewName, newPhone, setNewPhone }) => {
  const handleAddName = (e) => setNewName(e.target.value);
  const handleAddPhone = (e) => setNewPhone(e.target.value);

  const handleAddPerson = () => {
    event.preventDefault();
    const person = persons.filter(person => person.name === newName);

    if(person.length < 1) {
      setPersons(persons.concat({name: newName, phone: newPhone}));
      setNewName('');
      setNewPhone('');
    } else {
      alert(`${newName} has already been added`);
      setNewName('');
      setNewPhone('');
    }
  }

  return (
    <form onSubmit={handleAddPerson}>
        <div className="nameInput inputField">
          <label htmlFor="name">Name: </label>
          <input value={newName} onChange={handleAddName} />
        </div>
        <div className="phoneInput inputField">
          <label htmlFor="name">Phone: </label>
          <input value={newPhone} onChange={handleAddPhone} />
        </div>
        <div className="submitBtn inputField">
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default AddNewPerson
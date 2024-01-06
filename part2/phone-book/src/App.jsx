import { useState } from "react";
// components
import Filter from "./components/Filter";
import AddNewPerson from "./components/AddNewPerson";
import Contacts from "./components/Contacts";
// styles
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filterName, setFilterName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <AddNewPerson
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
      />
      <div>
          <Filter
            setFilterName={setFilterName}
            />
          <h2>Numbers</h2>
          <Contacts 
            contacts={persons}
            nameToFilter={filterName}
          />
      </div>
    </div>
  );
};

export default App;

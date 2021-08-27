import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
   
  }
  

  const submitChange = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // Check if newName already added to phonebook or not
    const check = persons.filter(person => person.name === newName )
    check.length === 0 ? setPersons(persons.concat(newPerson)) : alert(`${newName} is already added to phonebook`)

    setNewNumber('')
    setNewName('')
  }
  
  const search = persons.filter(person => person.name.includes(newSearch))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Serach <input value={newSearch} onChange={handleSearchChange}/>
      </div>
      <h2>Add new contact</h2>
      <form onSubmit={submitChange}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input type="tel" value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <ul>
        {search.map(person => <li key={person.name}>{person.name}: {person.number}</li>)}
        
      </ul>
    </div>
  )
}

export default App
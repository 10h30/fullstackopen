import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Contact from './services/Contact'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
      Contact
      .getContact()
      .then(initContact => {
        setPersons(initContact)
      })
  }, [])

  //console.log(persons)

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

    if (check.length ===0) {
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
            console.log(response)
        })
    }
    

    setNewNumber('')
    setNewName('')
    setNewSearch('')
  }

  const search = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />
      
      <h2>Add new contact</h2>
      <PersonForm onSubmit={submitChange} name={newName} number={newNumber} handleNumberChange={handleNumberChange} handleNameChange={handleNameChange}/>
      
      <h2>Numbers</h2>
      <Person data={search} />
      
    </div>
  )
}

export default App
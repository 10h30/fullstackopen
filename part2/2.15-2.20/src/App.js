import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import './index.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Contact from './services/Contact'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ errorMessage, setErrorMessage] = useState(null)
  const [ errorType, setErrorType ] = useState(null)


  useEffect(() => {
      Contact
      .getContact()
      .then(initContact => {
        setPersons(initContact)
      })
  }, [])


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
  
    // Check if newName already added to phonebook or not
    const check = persons.filter(person => person.name === newName )
    const id = check.length === 0 ?  persons[persons.length - 1].id + 1 : check[0].id

    const newPerson = {
      name: newName,
      number: newNumber,
      id: id
    }

    if (check.length === 0) {
      if ((newPerson.name === "") || (newPerson.number === "")) {
        alert(`Name or number cannot be empty`)
      }
      else {
        Contact
          .addContact(newPerson)
          .then(response => {
              setErrorMessage(`Added ${response.name}`)
              setErrorType ('notification')
              setTimeout(() => {
                setErrorMessage(null)
                setErrorType (null)
              }, 5000)
          })
        setPersons(persons.concat(newPerson))
      }
    }
    else {
      const result = window.confirm(`${newName} is already added to phonebook. Replace with new Number?`)
      console.log(id)
      const person = persons.find(n => n.id === id)
      if (result) {
        Contact
          .updateContact(id, newPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== id ? person : response))
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${person.name} was already removed from server`
            )
            setErrorType('error')
            setTimeout(() => {
              setErrorMessage(null)
              setErrorType (null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== id))
          })
      }
    }

    setNewNumber('')
    setNewName('')
    setNewSearch('')
  }

  const search = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const deleteHandler = (id) => {
    Contact
    .deleteContact(id)
    .then(response => {
      console.log(`${id} deleted`)
      setPersons(persons.filter(n => n.id !== id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} type={errorType} />
      <Filter value={newSearch} onChange={handleSearchChange} />
      
      <h2>Add new contact</h2>
      <PersonForm onSubmit={submitChange} name={newName} number={newNumber} handleNumberChange={handleNumberChange} handleNameChange={handleNameChange}/>
      
      <h2>Numbers</h2>
      <Person data={search} click={deleteHandler} />
      
    </div>
  )
}

export default App
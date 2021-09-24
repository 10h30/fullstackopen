import axios from 'axios'


const baseUrl = 'http://localhost:3001/persons'

const getContact = () => {
    const contact = axios.get(baseUrl)
    return contact.then(response => response.data)
}

 
const addContact = newPerson => {
    const contact = axios.post(baseUrl, newPerson)
    return contact.then(response => response.data)
}

const deleteContact = id => {
    const contact = axios.delete(`${baseUrl}/${id}`)
    return contact.then(response => response.data)
}

const updateContact = (id, newPerson) => {
    const contact = axios.put(`${baseUrl}/${id}`, newPerson)
    return contact.then(response => response.data)
}


const Contact = {
    getContact, addContact, deleteContact, updateContact
}

export default Contact
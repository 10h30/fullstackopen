import axios from 'axios'


const baseUrl = 'http://localhost:3001/persons'

const getContact = () => {
    const contact = axios.get(baseUrl)
    return contact.then(response => response.data)
}

 
const updateContact = newPerson => {
    const contact = axios.post(baseUrl, newPerson)
    return contact.then(response => response.data)
}

const deleteContact = id => {
    const contact = axios.delete(`${baseUrl}/${id}`)
    return contact.then(response => response.data)
}
   
/*
    const update = (id, newObject) => {
        return axios.put(`${baseUrl}/${id}`, newObject)
    }*/

const Contact = {
    getContact, updateContact, deleteContact
}

export default Contact
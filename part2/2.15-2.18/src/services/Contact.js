import axios from 'axios'


const baseUrl = 'http://localhost:3001/persons'

const getContact = () => {
    const contact = axios.get(baseUrl)
    return contact.then(response => response.data)
}

 /*
const updateContact = newObject => {
        return axios.post(baseUrl, newObject)
}
   

    const update = (id, newObject) => {
        return axios.put(`${baseUrl}/${id}`, newObject)
    }*/

const Contact = {
    getContact
}

export default Contact
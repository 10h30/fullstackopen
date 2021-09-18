import React from 'react'

const Person = ({data,click}) => {
    const clickHandler = (person) => {
        const result = window.confirm(`Do you want to delete ${person.name}?`)
        if (result) {
            click(person.id)
        }
    }
    return (
        <ul>
            {data.map(person => <li key={person.name}><span>{person.name}: {person.number}</span><span><button onClick={() => clickHandler(person)}>Delete</button></span></li>)}
        </ul>
    )
}

export default Person
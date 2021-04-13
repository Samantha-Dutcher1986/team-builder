import React, { useState } from 'react';
import './form.css';

const Form = (props) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        role: '',
    })

    const submitHandler = (event) => {
        event.preventDefault()
        props.addNewTeam(data)
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name</label>
            <input
                name='name'
                id='name'
                type='text'
                placeholder='Enter Name'
                value={data.name}
                onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                name='email'
                id='email'
                type='email'
                placeholder='Enter Email'
                value={data.email}
                onChange={handleChange}
            />
            <label htmlFor='role'>Role</label>
            <input
                name='role'
                id='role'
                type='role'
                placeholder='Enter Role'
                value={data.role}
                onChange={handleChange}
            />
            <button input type='submit'>
                Add Player
            </button>
        </form>
    )
}

export default Form
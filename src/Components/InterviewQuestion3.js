import React, { useState } from "react";

const PhoneBook = () => {
    const [formData, setFormData] = useState({
        firstName: 'Coder',
        lastName: 'Byte',
        phone: '8383838284'
    })
    const [contacts, setContacts] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target ;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedList = [...contacts, formData].sort((a, b) => a.lastName.localeCompare(b.lastName))
        setContacts(updatedList);
        setFormData({firstName: '', lastName: '', phone: ''})
    }

    return (
        <div>
            <h2>Phone Book</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type= 'text'
                    name= 'firstName'
                    value= {formData.firstName}
                    onChange= {handleChange}
                    placeHolder= 'Enter First Name'
                    required
                />
                <input 
                    type= 'text'
                    name= 'lastName'
                    value= {formData.lastName}
                    onChange= {handleChange}
                    placeHolder= 'Enter Last Name'
                    required
                />
                <input 
                    type= 'tel'
                    name= 'phone'
                    value= {formData.phone}
                    onChange= {handleChange}
                    placeHolder= 'Enter phone'
                    required
                />
                <button type='submit'>Add Contact</button>
            </form>
            <p>Here are list of all constacts</p>
        <ul> 
            {contacts.map((contacts, index) => 
            (<li key={index}>{`${contacts.firstName}, ${contacts.lastName} - ${contacts.phone}`}</li>) )}
        </ul>
        </div>
    );
}

export default PhoneBook
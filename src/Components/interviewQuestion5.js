
import React, { useState } from 'react'
import schema from '../Json/formSchema.json'

const DynamicForm = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev => ({ ...prev, [name]: value})))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {schema.map((feild) => (
                    <div key={feild.name}>
                        <label>{feild.label}</label>
                        <input 
                            type={feild.type}
                            name={feild.name}
                            value={formData[feild.name] || ''}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default DynamicForm;


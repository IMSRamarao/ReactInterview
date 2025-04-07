import React, { useState } from 'react'
import PostSearch from './InterviewQuestion4';
import DynamicForm from './interviewQuestion5';

const MaxCharFinder = () => {
    const [input, setInput] = useState('');
    const [maxChar, setMaxChar] = useState('');

    const handleChangeText = (e) => {
        const text = e.target.value
        setInput(text)
        findMaxChar(text)
    }

    const findMaxChar = (str) => {
        const charCount = {}
        let maxChar = ''
        let maxCount = 0

        for(let char of str) {
            if(char === " ") continue;
            charCount[char] = (charCount[char] || 0) + 1
            if(charCount[char] > maxCount) {
                maxCount = charCount[char]
                maxChar = char
            }
        }

        setMaxChar(maxChar ? `${maxChar} occured ${maxCount}` : null)
    }

    return (
        <div style={{ padding: '20px', maxWidth: '500Px', margin: 'auto'}}>
            <h2>Find Most Frequent Character</h2>
            <input 
                type = 'text'
                onChange={handleChangeText}
                value = {input}
                placeholder = "Enter the string"
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />
            {maxChar && (
                <p style={{ marginTop: '20px', fontSize:'18px'}}>
                    Maost Frequent: <strong>{maxChar}</strong>
                </p>
            )}

            <PostSearch />

            <h2> This is Dynamic Feilds</h2>
            <DynamicForm />

        </div>
    )
}

export default MaxCharFinder;
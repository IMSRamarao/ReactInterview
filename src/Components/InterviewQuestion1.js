//1. React with two dropdowns: One for country and another for state. If a user selects USA, show states like Texas; if Canada, show Montreal. Display selection in an alert

import React, { useState } from 'react';
import PhoneBook from './InterviewQuestion3';

const CountryStateMap = {
    USA: ['Texas', 'California', 'NewYork'],
    Canada: ['Montreal', 'Tornoto', 'Vancover']
}

const CountryStateSelection = () => {
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const handleStateChange = (e) => {
        setState(e.target.value)
    }
    
    const handleSubmit = () => {
        if(country && state) {
            alert(`Country Selected: ${country} \n State Selected: ${state}`)
        } else {
            alert("select both Country and State");
        }
    }
    return (
    <div>
        <h1>Select your Contry And State. </h1>
        <select value={country} onChange={handleCountryChange}>
            <option value="">-- Select Country --</option>
            {Object.keys(CountryStateMap).map((countryKey) => (
                <option key={countryKey} value={countryKey}>{countryKey}</option>
            ))}
        </select>
        <select value={state} onChange={handleStateChange}>
            <option value="">-- Select State --</option>
            {country && CountryStateMap[country].map((stateOption) => 
            (
                <option key={stateOption} value={stateOption}>{stateOption}</option>
            ))}
        </select>

        <button onClick={handleSubmit}>Submit</button>

        <PhoneBook />
    </div>
    );
}

export default CountryStateSelection
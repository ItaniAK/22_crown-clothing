import React, { useState } from 'react';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
    const [ formField, setFormField ] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField; 

    console.log(formField);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    }

    return (
        <div>
            <form action="">
            <label>Display name</label>
            <input 
                required 
                type="text" 
                name='displayName'
                value={displayName}
                onChange={handleChange}
            />
            <label>Email</label>
            <input 
                required 
                type="email" 
                name='email'
                value={email}
                onChange={handleChange}
                />
            <label>Password</label>
            <input 
                required 
                type="password" 
                name='password'
                value={password}
                onChange={handleChange}
                />
            <label>Confirm Password</label>
            <input 
                required 
                type="password" 
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                />
            <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}


export default SignUpForm;
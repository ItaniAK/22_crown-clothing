import React, { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';

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

    const resetFormFiled = () => {
        setFormField(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }     

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFiled();
    

        } catch (error) {
            if  (error.code === 'auth/email-already-in-use') {
                alert("Can't create user, email already in use")
            } else {
                console.log('user creation encountered an error', error);
            }
        }
        
    } 

    return (
        <div>
            <h2>Sign up with email and password</h2>
            <form onSubmit={handleSubmit}>
            <label>Display name</label>
            <input 
                required 
                type="text" 
                name="displayName"
                value={displayName}
                onChange={handleChange}
            />
            <label>Email</label>
            <input 
                required 
                type="email" 
                name="email"
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
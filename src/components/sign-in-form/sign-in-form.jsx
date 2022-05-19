import React, { useState } from 'react';

import { 
    signInWithGooglePopup,  
    createUserDocumentFromAuth,
    SingInUserWithEmailAndPassword
} from '../../utils/firebase';

import Button from '../button/button';

import FormInput from '../form-input/form-input';

import './sign-in-form.scss';

const defaultFormField = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [ formField, setFormField ] = useState(defaultFormField);
    const { email, password} = formField; 

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
      }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    }

    const resetFormFiled = () => {
        setFormField(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await SingInUserWithEmailAndPassword(email, password); 
            console.log(response);
        } catch (error) { 
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('Np user associated with this email');
                    break;
                
                case 'auth/wrong-password':
                    alert('Incorrect password with this email');
                    break;
                default: 
                    console.log(error);
                
            }
            // auth/user-not-found
            // auth/wrong-password
            console.log(error) 
        };
        
    } 

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>   
                <FormInput
                    label = "Email"
                    required 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                    />
                <FormInput
                    label = "Password"
                    required 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={handleChange}
                    />
                    <div className="buttons-container">
                        <Button type="submit">Sign In</Button>
                        <Button 
                            onClick={signInWithGoogle}
                            buttonType='google'>
                                Google sign In
                        </Button>  
                    </div>
            </form>
        </div>
    );
}


export default SignInForm;
import { useState } from 'react';

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utility/firebase/firebase.utility';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.component.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert('Wrong password');
            }
            if (error.code === 'auth/user-not-found') {
                alert('User not found');
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={email}
                    required />

                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={password}
                    required />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        type='button'
                        buttonType='google'
                        onClick={signInWithGoogle}>
                        Sign In with Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;

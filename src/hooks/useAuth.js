import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
    const [ error, setError ] = useState(null);
    const { dispatch } = useAuthContext();
    const signUp = async (email, password) => {
        setError(null);
        try {

            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response) {
                dispatch({ type: 'LOGIN', payload: response.user });
                // return response.user;
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return { error, signUp };
};

export const useLogout = () => {
    const [ error, setError ] = useState(null);
    const { dispatch } = useAuthContext();

    const logOut = async () => {
        setError(null);
        try {
            await signOut(auth);
            // dispatch logout action
            dispatch({ type: 'LOGOUT' });

        } catch (error) {
            setError(error.message);
        }
    };

    return { error, logOut };
};

export const useLogin = () => {
    const [ error, setError ] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if (response) {
                console.log(response.user);
                // dispatch login action
                dispatch({ type: 'LOGIN', payload: response.user });
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return { error, login };
};
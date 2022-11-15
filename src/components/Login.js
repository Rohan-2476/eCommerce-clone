import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import "./Login.css"
import RegistrationForm from './RegistrationForm';

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        // authenticates existing accounts for sign-in
        auth.signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        // authenticates new user accounts
        auth.createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" alt="Amazon" />
            </Link>

            <div className="login_container">

                <h1>Sign-in</h1>

                <form className='form'>
                    <h4>E-mail</h4>
                    <input type="email" value={email} onChange={e => setEmail(e.target.email)} />

                    <h4>Password</h4>
                    <input type="password" value={password} onChange={e => setPassword(e.target.password)} />

                    <button type='submit' onClick={signIn} className='signIn'>Sign in</button>
                </form>

                <p>
                    By signing-in you agree to the <strong>Amazon Clone's</strong> conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/registration'>
                    <button onClick={RegistrationForm} className='create_account'>Create an account</button>
                </Link>
            </div>

        </div>
    )
}

export default Login
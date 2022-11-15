import React, { useEffect, useState, setState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationForm.css'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';



function RegistrationForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  })
  const onSubmit = (data) => console.log(data)

  console.log(errors);



  //          ------- Form -------


  return (

    <div className="reg_form">

      <Link to='/'>
        <img className='_logo' src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" alt="Amazon" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>

        <h3>Create an account</h3>

        <div className="form-body">

          <div className="firstname">
            <label className="form__label" for="firstName">First Name </label>
            <input
              name='firstName'
              className="form__input"
              type="text" id="firstName"
              placeholder="Enter your first name"
              {...register('firstName', { required: 'Please enter your first name' })}
            />

            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

          <div className="lastname">
            <label className="form__label" for="lastName">Last Name </label>
            <input
              name='lastName'
              className="form__input"
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              {...register('lastName', { required: 'Please enter your last name' })}
            />

            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

          <div className="email">
            <label className="form__label" for="email">Email </label>
            <input
              name='email'
              type="email"
              id="email"
              className="form__input"
              placeholder="Enter your email"
              {...register('email', { required: 'Please enter a valid email id' })}
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

          <div className="password">
            <label className="form__label" for="password">Password </label>
            <input
              name='password'
              className="form__input"
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register('password', { required: 'Please enter a password' })}

              <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p>{message}</p>}
            />
            />
          </div>

          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Confirm Password </label>
            <input
              name='confirmPassword'
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>

        </div>

        <button type="submit" class="btn btn-primary register">Register</button>

      </form >
    </div>

  )
}

export default RegistrationForm
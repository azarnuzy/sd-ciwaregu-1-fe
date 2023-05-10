import { useFormContext } from '@/context/FormContext'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Page2() {
  const { kelengkapanData, setKelengkapanData } = useFormContext()

  const [formData, setFormData] = useState({})

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const handleInputChange = (e) => {
    const { name, files } = e.target

    setFormData({ ...formData, [name]: files })
  }

  console.log(formData?.pasPhoto !== undefined)
  const onSubmit = (data) => {
    setKelengkapanData(data)
  }

  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          {...register('name', { required: true })}
        />
        {errors.name && <span role='alert'>Name is required</span>}
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          {...register('email', {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
          })}
        />
        {errors.email && (
          <span role='alert'>Please enter a valid email address</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          {...register('password', { required: true, minLength: 8 })}
        />
        {errors.password && (
          <span role='alert'>Password must be at least 8 characters long</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input
          type='password'
          id='confirmPassword'
          {...register('confirmPassword', {
            required: true,
            minLength: 8,
            validate: (value) => value === watch('password'),
          })}
        />
        {errors.confirmPassword && (
          <span role='alert'>Passwords do not match</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          id='age'
          {...register('age', { required: true, min: 18, max: 120 })}
        />
        {errors.age && <span role='alert'>Age must be between 18 and 120</span>}
      </div>
      <div className='mb-3'>
        <label htmlFor='bio'>Bio:</label>
        <textarea
          id='bio'
          {...register('bio', {
            required: true,
            minLength: 10,
            maxLength: 1000,
          })}
        ></textarea>
        {errors.bio && (
          <span role='alert'>
            Bio must be between 10 and 1000 characters long
          </span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='gender'>Gender:</label>
        <select
          id='gender'
          {...register('gender', { required: true })}
        >
          <option value=''>Select a gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
        {errors.gender && <span role='alert'>Gender is required</span>}
      </div>
      <div className='mb-3'>
        <label htmlFor='newsletter'>Subscribe to newsletter:</label>
        <input
          type='checkbox'
          id='newsletter'
          {...register('newsletter')}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='terms'>Agree to terms:</label>
        <input
          type='checkbox'
          id='terms'
          {...register('terms', { required: true })}
        />
        {errors.terms && (
          <span role='alert'>You must agree to the terms and conditions</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='photo'>Photo:</label>
        <input
          type='file'
          id='photo'
          {...register('photo', { required: true })}
        />
        {errors.photo && <span role='alert'>Please upload a photo</span>}
      </div>
      <div className='mb-3'>
        <label>Favorite color:</label>
        <div className='mb-3'>
          <input
            type='radio'
            id='red'
            value='red'
            {...register('color', { required: true })}
          />
          <label htmlFor='red'>Red</label>
        </div>
        <div className='mb-3'>
          <input
            type='radio'
            id='green'
            value='green'
            {...register('color', { required: true })}
          />
          <label htmlFor='green'>Green</label>
        </div>
        <div className='mb-3'>
          <input
            type='radio'
            id='blue'
            value='blue'
            {...register('color', { required: true })}
          />
          <label htmlFor='blue'>Blue</label>
        </div>
        {errors.color && <span role='alert'>Favorite color is required</span>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Page2

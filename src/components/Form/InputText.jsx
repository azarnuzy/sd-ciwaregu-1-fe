import React from 'react'

function InputText(props) {
  // console.log(props.errors)
  return (
    <>
      <label
        className='form-title'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className='form-container'
        id={props.id}
        {...props.register(props.name, props.params)}
      />
      {props.errors.hasOwnProperty(props.name) && (
        <span
          className='text-red-700 text-sm my-1 inline-block'
          role='alert'
        >
          {props.errorText}
        </span>
      )}
    </>
  )
}

export default InputText

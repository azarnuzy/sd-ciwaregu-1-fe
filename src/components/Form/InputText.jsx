import React from 'react'

function InputText(props) {
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
      {props.errors.namaAsalSekolah && (
        <span
          className='text-red-700'
          role='alert'
        >
          {props.errorText}
        </span>
      )}
    </>
  )
}

export default InputText

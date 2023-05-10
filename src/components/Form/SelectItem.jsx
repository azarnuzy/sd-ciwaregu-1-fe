import React from 'react'

function SelectItem(props) {
  return (
    <>
      <label
        className='form-title'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <select
        className='form-container cursor-pointer'
        id={props.id}
        {...props.register(props.id, props.label)}
      >
        <option
          value={props.defaultValue}
          disabled
        >
          Masukan Agama
        </option>
        {props.data.map((item, i) => (
          <option
            value={item}
            key={i}
          >
            {item}
          </option>
        ))}
      </select>
      {props.errors.agama && (
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

export default SelectItem

import { useFormContext } from '@/context/form-context'
import React from 'react'

function InputText(props) {
  // console.log(props.errors)

  const { kelengkapanData, setKelengkapanData } = useFormContext()

  let value = ''
  if (kelengkapanData[props.name] !== undefined) {
    value = kelengkapanData[props.name]
  }

  // console.log();
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
        value={value}
        {...props.register(props.name, {
          required: true,
          onChange: (e) => {
            setKelengkapanData({
              ...kelengkapanData,
              [props.name]: e.target.value,
            })
          },
        })}
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

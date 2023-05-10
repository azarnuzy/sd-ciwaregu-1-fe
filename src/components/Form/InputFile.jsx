import React from 'react'

function InputFile(props) {
  return (
    <>
      <label
        className='form-title'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <div className='relative bg-white text-gray-700 border border-gray-200 rounded   leading-tight focus:outline-none shadow-sm'>
        <input
          type='file'
          id={props.id}
          className='absolute text-gray-700  inset-0 w-full h-full opacity-0 cursor-pointer'
          {...props.register(props.id, props.params)}
        />
        <div
          className={`flex ${
            props.formData !== undefined ? 'justify-between' : 'justify-end'
          }  items-center pl-4 w-full`}
        >
          {props.formData && (
            <span className='text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis'>
              {props.formData[0].name}
            </span>
          )}

          <label
            className=' cursor-pointer bg-gray-200 text-gray-700 border border-gray-200 px-4 py-2 rounded-md inline-flex   items-center space-x-2'
            htmlFor={props.id}
          >
            <span>Browse</span>
          </label>
        </div>
      </div>
      {props.errors.pasPhoto && (
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

export default InputFile

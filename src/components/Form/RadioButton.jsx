import React from 'react'

function RadioButton(props) {
  const data = props.data

  return (
    <>
      <label className='form-title'>{props.label}</label>
      <div className='flex justify-start flex-wrap gap-5 '>
        {data.map((item, i) => (
          <div
            className='flex gap-3 items-center justify-center'
            key={i}
          >
            <input
              type='radio'
              id={item.id}
              value={item.value}
              {...props.register(item.name, item.params)}
            />
            <label
              className=' tracking-wide'
              htmlFor={item.id}
            >
              {item.value}
            </label>
          </div>
        ))}
      </div>
      {props.errors.asalMuasal && (
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

export default RadioButton

import { useFormContext } from '@/context/form-context'
import React from 'react'

function RadioButton(props) {
  const data = props.data
  const { kelengkapanData, setKelengkapanData } = useFormContext()

  // console.log(props.name)
  return (
    <>
      <label className='form-title'>{props.label}</label>
      <div className='flex justify-start flex-wrap gap-5 '>
        {data.map((item, i) => {
          return (
            <div
              className='flex gap-3 items-center justify-center'
              key={i}
            >
              <input
                type='radio'
                id={item.id}
                value={item.value}
                {...props.register(item.name, {
                  required: true,
                  onChange: (e) => {
                    console.log()
                    setKelengkapanData({
                      ...kelengkapanData,
                      [item.name]: e.target.value,
                    })
                  },
                })}
                checked={
                  item.value === kelengkapanData[props.name] ? true : false
                }
              />
              <label
                className=' tracking-wide'
                htmlFor={item.id}
              >
                {item.value}
              </label>
            </div>
          )
        })}
      </div>
      {props.errors.hasOwnProperty(props.name) && (
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

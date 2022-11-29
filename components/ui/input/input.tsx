import React from 'react'

type Props = {
    handleChange?: React.ChangeEventHandler<HTMLInputElement>,
    placeholder?:string,
}

function Input({handleChange,placeholder}: Props) {
  return (
    <input className='bg-dim-white rounded pl-2' placeholder={placeholder} type="search" onChange={handleChange}/>
  )
}

export default Input
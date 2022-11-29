import React from 'react'

type Props = {
    text:string,
    className?:string
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({text,className,onClick}:Props) {
  return (
    <button onClick={onClick} className={`button-hover text-white px-4 bg-primary rounded ${className}`}>{text}</button>
  )
}
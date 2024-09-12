import React from 'react'

type Props = {
    type: string,
    id: string,
    placeholder: string
}

const Input:React.FC<Props>= ({type,id,placeholder}) => {
  return (
    <input className='w-full text-base text-grey border border-greyLight rounded-md p-3' type={type} id={id} placeholder={placeholder}/>
  )
}

export default Input
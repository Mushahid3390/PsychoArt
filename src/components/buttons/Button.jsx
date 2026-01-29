import React from 'react'

const Button = ({label, style}) => {
  return (
    <button className={`${style} py-2.5 px-5 hover:opacity-85 rounded-[10px] bg-linear-to-b from-[#B75CFF] to-[#671AE4]`}>{label}</button>
  )
}

export default Button

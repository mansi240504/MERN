import React from 'react'

const Buttons = ({Children}) => {
  return (
    <button className='color-red font-bold '>
        
        {Children}
    </button>
  )
}

export default Buttons
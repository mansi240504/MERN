import React from 'react'

const Card = ({imgURL, title , desc ,btntext}) => {
  return (
    <div className='bg-white rounded-xl shadow-lg'>
        <img className='rounded-t-xl' src={imgURL} alt="" />
        <div className='p-4 space-y-4'>
            <h2 className=''>{title}</h2>
            <p>{desc}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                {btntext}
            </button>
        </div>
    </div>
  )
}

export default Card
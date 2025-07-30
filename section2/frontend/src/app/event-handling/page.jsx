'use client';

import React from 'react'

const EventHandeling = () => {
  return (
    <div className='container mx-auto py-5 min-h-screen' 
    onMouseMove={(e)=>{
      const circle =document.getElementById('target');
      circle.style.left=e.clientX  -20 +'px';
      circle.style.top=e.clientY -20 + 'px';
    
    }}>

      {/* <div className=' -z-1 size-10 bg-purple-500 rounded-full absolute 'id ="target"></div> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnYYFlQ2v5h_nCu1RnlXlveMHUgHp4A-Jjma60c_QNqE0b5bNMsWm67JjzxmFXObipB4&usqp=CAU" className='-z-1 h-10 absolute' id="target" alt="" />

      <button 
      onClick={()=>{alert("Button Clicked")}}
      className='bg-blue-500 text-white p-4'>
        Click Event
      </button>
      <input type="text"
      className='border p-3 block mt-5'
      onChange={(e)=>{ console.log(e.target.value);}} />

      <input type="color"
      className='block mt-5'
             onChange={(e)=>{ document.body.style.backgroundColor=e.target.value}} />
      <input type="text"
      className='block mt-5 border p-3'
      onKeyDown={(e)=>{ console.log(e.code);}} />

      <input type="file"  className='block mt-5'
      onChange={(e)=> {console.log(e.target.files);}}
        accept='image/png'/>
    </div>
  )
}

export default EventHandeling
"use client"
import React, { useState } from 'react'

const Todolist = () => {

    // let count =0;
    //  const [count , setCount ] = useState(1);
    const [tasklist, settasklist] = useState([
        {text: "Wake up at 5:AM",completed:false},
        {text: "coding",completed:false},
        {text: "Tution",completed:false},
        {text: "Lunch",completed:false},
    ])
    const addTask= (e)=>{
        if(e.code === "enter"){
            console.log(e.target.value);
            e.target.value="";
        }
        
    }

  return (
    <div className='min-h-screen bg-amber-50'>
        {/* <h1 className='text-4xl'> {count}</h1>
        <button  className='border block mt-2'
        onClick={()=>{setCount(count+1); console.log(count);}}> Add Count </button> */}
        <h1 className=' font-bold text-4xl text-center'>Todo List </h1>
        <div className='container mx-auto rounded-md shadow-md'>
            <div className='p-3 align-middle'>
                <input  
                onKeyDown={addTask}
                className="border-3 p-3   bg-white rounded block w-1/2"
                type="text" 
                placeholder='Add a new todo' />
            </div>
            <div className='p-3 bg-white '>
                <p> Task list here</p>
            </div>

        </div>
    </div>
  )
}

export default Todolist
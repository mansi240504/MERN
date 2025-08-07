"use client"
import React, { useState } from 'react';
import { IconTrash } from '@tabler/icons-react';

const Todolist = () => {

    // let count =0;
    //  const [count , setCount ] = useState(1);
    const [tasklist, settasklist] = useState([
        // {text: "Wake up at 5:AM",completed:false},
        // {text: "coding",completed:false},
        // {text: "Tution",completed:false},
        // {text: "Lunch",completed:false},
    ])
    const deleteTask =(index )=>
    {
        console.log(index);
        const temp = tasklist;
        temp.splice(index,1);
        settasklist([...temp]);
    }
    const addTask= (e)=>{
        if(e.code === "Enter"){
            console.log(e.target.value);
            const newTask={ text:e.target.value,completed : false,date:(new Date()).toLocaleDateString(), 
                
            };
            settasklist ([newTask, ...tasklist])
            e.target.value=" ";
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
                
                placeholder='Add a new todo...'
                type="text"  />
            </div>
            <div className='p-3 border-t-1 '>
                {
                    tasklist.map((task,index)=>
                    {
                        return <div
                          key={index}
                          style={{borderColor: task.completed ?'green':'red'}}
                        className='border rounded-lg p-4 mb-4 flex justify-between'>
                            <div className='flex gap-3'> 
                                <input type="checkbox"
                                checked={task.completed}
                                onChange={(e)=>{
                                    const temp =tasklist;
                                    temp[index].completed=e.target.checked;
                                    settasklist([...temp]);

                                }} />
                                <p style={{textDecoration:task.completed?'line-through':'none'}}
                                >{task.text}</p>
                                </div>
                                <p>{task.date} {task.time}</p>
                            <button 
                            onClick={()=>deleteTask(index)}
                            className=' bg-red-800 text-white  rounded-lg'>
                                <IconTrash />
                                </button>
                        </div>
                    })
                        

                   }
            </div>

        </div>
    </div>
  )
}

export default Todolist
import Buttons from '@/components/Buttons'
import Card from '@/components/Card'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='font-bold text-center text-4xl '> Welcome to my home page </h1>
      <p style={{color:'red'}}>inline css</p>
      
      
      <Buttons Children={"Sign up"}/> 
      <br/>
      <Buttons Children={"Login "}/>

       <div className='w-1/4'> 
            <Card 
            title={"cartoons "}
            desc={"ye kon sa cartoon hai" }
            btntext={" Watch"}

            imgURL="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/imagery-of-donal-duck-movies.jpg"/>
            <Card 
             title={"Tom & Jerry"}
             desc={"ye bhi"}
             btntext={"Watch later"}
             
            imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluPfinI6xImt163SCqV6_g_tKNA-zJMYlNw&s"/>
            
            

        </div>      

      



    </div>
  )
}

export default Page
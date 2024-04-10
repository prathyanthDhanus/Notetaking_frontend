import React from 'react';
import { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "../styles/home.css"




const Home = () => {



    const user = localStorage.getItem("user");
    const navigate = useNavigate()
   
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            title : e.target.title.value.toUpperCase(),
            description  : e.target.description.value,
            colour: e.target.colour.value.toLowerCase(),
            userId : user
        }
          
       
            try{
                const response = await axios.post( `http://localhost:3000/notes`,data);
                if(response.status===200){
                  alert(response.data.message)
                  window.location.reload()
                }
                
            }catch(error){
              alert(error.response.data.message)
            }
            
             
        
       
    }

  return (
   
 <div className='home-container'> 
        <div className='home-wrapper'>
            <h2>Add Notes</h2>
        </div>
        <form onSubmit={handleSubmit}>
      <div className='title-input'>
        <input placeholder="Title" type="text" name="title"  autoComplete='off'
       />
      </div>
      <div className='description-input'>
        <input placeholder="Description" type="text" name="description" autoComplete='off'
        />
      </div>
      <div className='colour-input'>
        <input placeholder="Baground Colour" type="text" name="colour" 
        />
      </div>
      <div className='home-savebtn'><button type="submit">Save</button></div>
        </form>
        <button onClick={()=>navigate("/view/notes")} className='view-taskbtn'>View all notes</button>
    </div>  
        
    
  )
}

export default Home
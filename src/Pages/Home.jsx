import React from 'react';
import { useState } from 'react';
// import axios from axios


const Home = () => {


    const [formData, setFormData] = useState({
        title: '',
        description: '',
      });
    const user = localStorage.getItem("user")
    console.log(user)
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            title : e.target.email.value,
            description  : e.target.password.value,
            colour: e.target.colour.value
        }
          
        
            try{
                const response = await axios.post( `http://localhost:3000/create/note/${id}`,data);
                if(response.status===200){
                  return  alert(response.data.message)
                }
                
            }catch(error){
               console.log(error)
            }
            
             
        
       
    }

  return (
   
 <div>
        <div>
            <h2>Home</h2>
        </div>
        <form onSubmit={handleSubmit}>
      <div>
        <input placeholder="Title" type="email" name="title"  
       />
      </div>
      <div>
        <input placeholder="Description" type="password" name="description" 
        />
      </div>
      <div><button type="submit">Save</button></div>
        </form>
    </div>  
        
    
  )
}

export default Home
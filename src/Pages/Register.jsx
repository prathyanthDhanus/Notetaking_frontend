import React, { useState } from "react";
// import axios from "../Api/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });

      const navigate = useNavigate();
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            userName : e.target.username.value,
            email : e.target.email.value,
            password  : e.target.password.value
        }
          
        
            try{
                const response = await axios.post("http://localhost:3000/user/register",data);
                if(response.status===201){
                  alert(response.data.message)
                  navigate('/login')
                }
                
            }catch(error){
               console.log(error)
            }
            
             
        
       
    }

      
  


  return (
    <div>
        <div>
            <h2>Register</h2>
        </div>
        <form onSubmit={handleSubmit}>

      <div>
      <input placeholder="Username" type="text" name="username"  
        />
      </div>
      <div>
        <input placeholder="Email" type="email" name="email"  
       />
      </div>
      <div>
        <input placeholder="Password" type="password" name="password" 
        />
      </div>
      <div><button type="submit">Register</button></div>
        </form>
    </div>  
  );
};

export default Register;

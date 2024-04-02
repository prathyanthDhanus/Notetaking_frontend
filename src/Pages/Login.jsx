import React, { useState } from "react";
// import axios from "../Api/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            email : e.target.email.value,
            password  : e.target.password.value
        }
          
        
            try{
                const response = await axios.post("http://localhost:3000/user/login",data);
                if(response.status===200){
                    console.log(response)
                    alert(response.data.message)
                    navigate('/')
                    localStorage.setItem("user",response.data._id)
                }
                
            }catch(error){
               console.log(error)
            }
            
             
        
       
    }

      
  


  return (
    <div>
        <div>
            <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
      <div>
        <input placeholder="Email" type="email" name="email"  
       />
      </div>
      <div>
        <input placeholder="Password" type="password" name="password" 
        />
      </div>
      <div><button type="submit">Login</button></div>
        </form>
    </div>  
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/signup.css";



const Register = () => {



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
               alert(error.response.data.message)
            }
            
             
        
       
    }

      
  


  return (
    <div className="signup-container">
      <div className="signup-image">

      </div>
      <div className="signup-wrapper">

        <div className="signup-head">
            <h2>Register</h2>
        </div>
        <form onSubmit={handleSubmit}>

      <div className="username-input">
      <input placeholder="Username" type="text" name="username"  autoComplete="off"
        />
      </div >
      <div className="email-input">
        <input placeholder="Email" type="email" name="email"  autoComplete="off"
       />
      </div>
      <div className="password-input">
        <input placeholder="Password" type="password" name="password" autoComplete="off"
        />
      </div>
      <div className="signup-btn"><button type="submit">Register</button></div>
      <div className="login">
                <span>
                  Already have an account? <Link to="/login">Login here</Link>
                </span>
              </div>
        </form>
        </div>
    </div>  
  );
};

export default Register;

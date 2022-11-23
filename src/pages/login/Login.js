import React from "react";
import { useNavigate } from "react-router-dom";
import './login.css'



const LoginForm =()=>{
   
      return(
        <div id="loginform">
          <FormHeader title="Login" />
          <Form />
         
        </div>
      )
    }
  const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  export default LoginForm;
  const Form = props => (
     <div>
       <FormInput description="Username" placeholder="Enter your username" type="text" />
       <FormInput description="Password" placeholder="Enter your password" type="password"/>
       <FormButton title="Log in"/>
     </div>
  );
  
  const FormButton = props => {
    const navigate = useNavigate();
    return(
        <div id="button" class="row">
      <button onClick={()=>{navigate('/')}}>{props.title}</button>
      </div>
    )

  };
  
  const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  

  
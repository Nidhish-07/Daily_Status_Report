

import React,{useState} from 'react'
// import { toast } from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'



import {AiOutlineArrowRight} from "react-icons/ai"
import {MdVisibility} from "react-icons/md"



function SignIn() {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData;
 
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className="pageHeader">Welcome Back..!</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input 
              type="email" 
              className="emailInput" 
              onChange={onChange}
              placeholder = "Email"
              id='email'
              value={email}
            />
            <div className="passwordInputDiv">
            <input 
              type={showPassword ? 'text': 'password'} 
              className="passwordInput" 
              onChange={onChange}
              id='password'
              placeholder = "Password"
              value={password}
            />
            <MdVisibility 
                color='#ffff'
                size={25}
              />
            </div>

          <Link 
            to='/forgot-password'
            className="forgotPasswordLink">
              Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <AiOutlineArrowRight 
                color='#ffff'
                size={25}
              />
            </button>
          </div>
        </form>

        <Link to='/sign-up'className="registerLink">
          Sign Up Instead
        </Link>
        </main>
      </div>
    </>
  )
}

export default SignIn

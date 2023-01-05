
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



import {AiOutlineArrowRight} from "react-icons/ai"


function ForgotPassword() {

  const [email, setEmail] = useState('');
  const onChange = (e) => {e.preventDefault};

  const onSubmit = async (e) => {
    e.preventDefault()
  }


  
  return (
    <div className="pageContainer">

      <header className="pageHeader">Forgot Password</header>

      <main>
        <form onSubmit={onSubmit}>

          <input 
            type="email"
            placeholder='Email'
            onChange={onChange}
            id='email'
            value = {email}
            className = "emailInput"
          />

          < Link className='forgotPasswordLink' to='/sign-in'>
            Sign In
          </Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>  
            <button className="signInButton">
              <AiOutlineArrowRight 
                color='#ffff'
                size={25}
              />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword

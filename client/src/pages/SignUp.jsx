import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import { toast } from 'react-toastify'
import {AiOutlineArrowRight} from "react-icons/ai"
import {MdVisibility} from "react-icons/md"



function SignUp() {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  })

  const {name,email, password} = formData;
 
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    
  }
  const onChange = (e) => {
    
  }

 

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className="pageHeader">Welcome..!</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input 
              type="name" 
              className="nameInput" 
              onChange={onChange}
              placeholder = "Name"
              id='name'
              value={name}
            />
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
            <p className="signInText">Sign Up</p>
            <button className="signInButton">
            <AiOutlineArrowRight 
                color='#ffff'
                size={25}
              />
            </button>
          </div>
        </form>
          
        

        <Link to='/sign-in'className="registerLink">
          Sign In Instead
        </Link>
        </main>
      </div>
    </>
  )
}

export default SignUp

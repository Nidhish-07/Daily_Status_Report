import React from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase.js"
import { useNavigate } from "react-router-dom"

const Landing = () => {

    //Fields for login form
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    //To make user login persistance
    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/home")
            }
        })
    }, [])


    //For navigation
    const navigate = useNavigate()

    //All the handler functions
    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const signInHandler = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then(() => navigate('/home')).catch(err => alert(err.message))

    }
    return (
        <div>
            <h1>Daily Status Report</h1>
            <div>
                <input type="email" onChange={emailChangeHandler} value={email} />
                <input type="password" onChange={passwordChangeHandler} value={password} />
                <button onClick={signInHandler}>Sign In</button>
                <a href="">Create an account</a>
            </div>
        </div>
    )
}

export default Landing
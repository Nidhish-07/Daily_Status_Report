import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"

const Landing = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div>
            <h1>Daily Status Report</h1>
            <div>
                <input type="email" onChange={emailChangeHandler} value={email} />
                <input type="password" onChange={passwordChangeHandler} value={password} />
                <button>Sign In</button>
                <a href="">Create an account</a>
            </div>
        </div>
    )
}

export default Landing
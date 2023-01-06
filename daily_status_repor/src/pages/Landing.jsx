import React from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.js"
import { useNavigate } from "react-router-dom"

const Landing = () => {

    //Fields for login form
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [registering, setRegistering] = React.useState("")
    const [registrationInfo, setRegistrationInfo] = React.useState({ password: "", confirmPassword: '' })

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

    const registeringHandler = (val) => {
        setRegistering(val)
    }

    const registrationHandler = (event) => {
        event.preventDefault()

        if (registrationInfo.password !== registrationInfo.confirmPassword) {
            return alert("Password and Confirm Password are not the same.")
        }

        createUserWithEmailAndPassword(auth, registrationInfo.email, registrationInfo.password).then(() => navigate("/home")).catch(err => alert(err.message))
    }


    return (
        <div>
            <h1>Daily Status Report</h1>
            <div>
                {registering ?
                    <form onSubmit={registrationHandler}>
                        <input
                            type="text"
                            placeholder="FirstName" />
                        <input
                            type="text"
                            placeholder="LastName" />
                        <input
                            type="email"
                            value={registrationInfo.email}
                            placeholder="Email"
                            onChange={(event) => setRegistrationInfo({ ...registrationInfo, email: event.target.value })} />
                        <input
                            type="password"
                            value={registrationInfo.password}
                            placeholder="Password" onChange={(event) => setRegistrationInfo({ ...registrationInfo, password: event.target.value })}

                        />
                        <input
                            type="password"
                            value={registrationInfo.confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(event) => setRegistrationInfo({ ...registrationInfo, confirmPassword: event.target.value })}

                        />
                        <button>Register</button>
                        <button onClick={() => registeringHandler(false)}>Back</button>
                    </form> :
                    <form onSubmit={signInHandler}>

                        <input
                            type="email"
                            onChange={emailChangeHandler}
                            value={email}

                        />
                        <input
                            type="password"
                            onChange={passwordChangeHandler}
                            value={password}
                        />
                        <button>Sign In</button>
                        <button onClick={() => registeringHandler(true)}>Create an account</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default Landing
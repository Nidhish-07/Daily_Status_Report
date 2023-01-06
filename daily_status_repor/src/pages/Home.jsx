import React from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    //For navigation
    const navigate = useNavigate()

    //This hook is used so that user can go to the home page without signing out
    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                navigate('/')
            }
        })
    }, [])

    //Sign Out handler function
    const signOutHandler = () => {
        signOut(auth).then(() => navigate("/")).catch(err => console.log(err.message))
    }
    return (
        <div>
            <h1>asdasd</h1>
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
    )
}

export default Home
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar'
import Listing from './pages/Listing'
function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route path='/' element={<Listing/>}/> 
          <Route path='/sign-in' element={<SignIn/>}/> 
          <Route path='/sign-up' element={<SignUp/>}/> 
          <Route path='/forgot-password' element={<ForgotPassword/>}/> 
      
        </Routes>

        <Navbar/>

      </Router>

    </>
  );
}

export default App;

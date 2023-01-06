import React from 'react'
import Landing from './pages/Landing'
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom"
import Home from './pages/Home'

//Crete a router for navigation
const router = createBrowserRouter([{
  path: "/",
  element: <Landing></Landing>,
  exact:true

}, {
  path: "/home",
  element: <Home></Home>
}])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


import {BsTagFill,BsPersonFill} from 'react-icons/bs'

import {MdExplore} from 'react-icons/md'




function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if(route === location.pathname){
      return true;
    }
  }
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={()=> navigate('/')} >

          <MdExplore 
                color='#ffff'
                size={25}
              />
              <p
                className={
                  pathMatchRoute('/') ? 'navbarListItemNameActive':'navbarListItemName'
                }
              >Explore</p>

          </li>
          <li className="navbarListItem" onClick={()=> navigate('/offers')}>

          <BsTagFill 
                color='#ffff'
                size={25}
              />
              <p
                className={
                  pathMatchRoute('/offers') ? 'navbarListItemNameActive':'navbarListItemName'
                }
              >Offers</p>

          </li>
          <li className="navbarListItem" onClick={()=> navigate('/profile')}>

          <BsPersonFill 
                color='#ffff'
                size={25}
              />
              <p
                className={
                  pathMatchRoute('/profile') ? 'navbarListItemNameActive':'navbarListItemName'
                }
              >Profile</p>

          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar

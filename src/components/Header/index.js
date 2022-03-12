import React, { useState } from 'react'
import { ContendButton, LinkButton } from '../../styledComponents/components'
// import Button from '../Button/Button'
import Brand from '../Brand/Brand'
import HotTopic from './HotTopic/HotTopic'
import './index.modules.css'
import Navbar from './Navbar/Navbar'

const navItems = [
  {
    id: "0",
    title: 'Home',
    slug: "/",
  },
  {
      id: "1",
      title: 'Portfolio',
      slug: "/portfolio",
  },
  {
      id: "2",
      title: 'About',
      slug: "/about",
  },
  {
      id: "3",
      title: 'Contact',
      slug: "/about",
  }
]

function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <>
      <div className="global_container">
        <div className="main_header__container">
          <header className="main_header container">
            <Brand />
            {/* <!-- .main_header__branding --> */}
            <Navbar 
              navItems={navItems}
              activeNav={activeNav}
            />
            <HotTopic label='new' annousment="Becoming a business partner online."/>

            <div className="main_header__user_auth">
              {/* <Button type='link'  title='Login'/>
              <Button title='Sign Up'/> */}
              <LinkButton sm>Login</LinkButton>
              <ContendButton sm>Sign Up</ContendButton>
              
            </div>
            {/* <!-- .main_header__user_auth --> */}
          </header>
          {/* <!-- .main_header --> */}
        </div>
        {/* .main_header__container  */}
      </div>
      {/* .global_container  */}

    </>
  )
}

export default Header
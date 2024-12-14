import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import github from '../assets/github.png'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between my-8 mb-24 items-center text-center">
        <Link to='/'>
        <h1 className="text">Joshua</h1>

        </Link>
        <div className="menu-bar flex justify-evenly">
          <Link to="/"><p>Home</p></Link>
          <Link to="/approach"><p>Experiences</p></Link>
          <Link to="/projects"><p>Projects</p></Link>

        </div>
        <div className="connect">
          <a href="https://github.com/johzcodes">
          <img src={github} alt="" className="w-8" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar






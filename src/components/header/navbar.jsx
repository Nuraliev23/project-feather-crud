import React from 'react'
import "./navbar.css"
import shop from "./Vector (1).png"
import logo from "./Vector.png"
const Headernavbar = () => {
  return (
    <div>
        <nav>
            <ul className=''>
                <li>Furniture</li>
                <li>Why Feather</li>
                <li>Feather for Business</li>
            </ul>
            <img src={logo} alt="" />
            <ul className='spisok2'>
                <li>Check if We Deliver</li>
                <li>Search</li>
                <li>Account</li>
                <img src={shop} className='shop' alt="" />
            </ul>

        </nav>
    </div>
  )
}

export default Headernavbar
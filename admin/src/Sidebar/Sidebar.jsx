import React from 'react'
import { Link } from 'react-router-dom'
import cart from "../assets/Product_Cart.svg"
import list from "../assets/Product_list_icon.svg"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link style={{textDecoration:"none"}} to={'/addproduct'}>
        <div className='sidebar_item'>
            <img src={cart} alt="" />
            <p>Addproduct</p>
        </div>
      </Link>
      <Link style={{textDecoration:"none"}} to={'/listproduct'}>
        <div className='sidebar_item'>
            <img src={list} alt="" />
            <p>Addproduct</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar

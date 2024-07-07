import React, { useState } from 'react';
import './Navbar.css'
// import { BrowserRouter } from 'react-router-dom';

import { Link } from 'react-router-dom'

import LOGO from '../Assets/logo.png';
import CART_ICON from '../Assets/CART_ICON.png';
// import Shop from '../../Pages/Shop';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={LOGO} alt="" />
            <p>Window Shop</p>
        </div>
        
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none '}}to='/'>Shop</Link> {menu==="shop" ?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none '}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none '}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none '}} to='/Kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li></ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={CART_ICON} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}

export default Navbar

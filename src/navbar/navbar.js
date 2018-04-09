import React from 'react';
import './navbar.css';
import Logo from './../React_logo.png';

export default Navbar => (
    <nav class="navbar">
        <div class="nav-wrapper">
            <a class="brand-logo" href="#">
                <img class ="logo-img"src ={Logo}></img>
            </a>
            <ul id="nav-mobile" class="right  nav-secoes">
                <li><a href="#/sobre"> Sobre React </a></li>
                <li><a href="#/componente"> Componente </a></li>
                <li> <a href="#/roteamento"> Roteamento </a></li>
            </ul>
        </div>
    </nav>
)


import React from 'react'
import { ArrowBarRight } from 'react-bootstrap-icons'
import rouletteImage from '../../images/rouletteWheel.png'
import '../styles/sidebar.css'

function Sidebar (props) {
    return (
        <div id='sidebarOuter'>
            <div id='sidebar'>
                <button id='closeSidebarButton' onClick={props.onHide}><ArrowBarRight size={30}/></button>
                <div id='sidebarHeader'>
                    <img id='sidebarLogo' src={rouletteImage} alt='Roulette wheel image' />
                </div>
                <div id='sidebarBody'>
                    <button id='loginButton'>Log In/Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
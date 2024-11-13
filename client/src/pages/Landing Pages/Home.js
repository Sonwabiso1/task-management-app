import React from 'react'
import '../../styles/Landing/About.css'
import logo from '../../assets/logo.png';

export default function About(){

    return (
        <>
        <div id="topPart">
            <img src={logo}  className='logo'/>
           
        </div>
        <button>Sign up</button>
        <div id="carousel">
            <div></div>
            <p>Text about our features</p>
        </div>

        <div id="team">
            <br/>
            <h1>Meet our team</h1>
            <br/>

            <div id="divCollection">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    )
}
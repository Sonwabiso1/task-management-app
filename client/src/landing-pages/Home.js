import React from 'react'
import '../styles/landing/Home.css'
import logo from '../assets/logo.png';
import Carousel from './Carousel';
import Sonwabiso from '../assets/sonwabiso.jpg';
import Nikitha from '../assets/nikitha.jpg';
import Robyn from '../assets/robyn.jpg';
import Du from '../assets/du.jpg';
import Monica from '../assets/monica.jpg';

export default function Home(){

    return (
       <div className='home'>
            <nav>
                <img src={logo} alt="Logo"/>
                <ul className='navlist'>
                    <li><a href='/login'>Login</a></li>
                    <li>or</li>
                    <li><button><a href='/signup'>Signup</a></button></li>
                </ul>
            </nav>
            <div className='homecontent'>
                <h1>Welcome to TaskDash</h1>
                <p>Check out our features</p>
            </div>
            <Carousel/>
            <h2 id='teamHeading'>Meet the team of developers</h2>
            <div className='team'>
                <div className='teammember'>
                    <img src={Sonwabiso} alt='Team Member 1' className='avatar'/>
                    <h3>Sonwabiso Maloni</h3>
                    <p>Fullstack developer</p>
                </div>
                <div className='teammember'>
                    <img src={Nikitha} alt='Team Member 1' className='avatar'/>
                    <h3>Nikitha Mbokotwana</h3>
                    <p>Project Manager</p>
                </div>
                <div className='teammember'>
                    <img src={Du} alt='Team Member 1' className='avatar'/>
                    <h3>Du-Wayne Frieslaar</h3>
                    <p>Front-end developer</p>
                </div>
                <div className='teammember'>
                    <img src={Robyn} alt='Team Member 1' className='avatar'/>
                    <h3>Robyn Paulsen</h3>
                    <p>Front-end developer</p>
                </div>
                <div className='teammember'>
                    <img src={Monica} alt='Team Member 1' className='avatar'/>
                    <h3>Monica Ndlovu</h3>
                    <p>Front-end developer</p>
                </div>

            </div>
       </div>
    )
}
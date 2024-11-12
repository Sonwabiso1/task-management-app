import React from 'react'
import './../../styles/User/userprofile.css'

export default function Userprofile(){
    return(
        <div id="profile-page">

        <div id="left-section">
        <div id="profile-board">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP2je-KiPK5IQa4SyN7GsR7NtyoyjmOnTQQ&s" alt="profile pic" id="profile-pic"/>
          <h1>Hailey Williams</h1>
          <h2>User</h2>
        </div>

        <div id="bio-section">
          <h1>Bio</h1>
          <p>
            A very passionate developer based in Capetown. Unmatched passion. 
            I love long walks on the beach with my dog, 'tugboat'
          </p>
        </div>

        </div>

        <div id="right-section">
            <h1>User profile</h1>
            <h4>Name/Surname:<span class="details">Hailey Williams</span></h4>
            <hr/>
            <br/>
            <h4>Email: <span class="details">haileyblast23@gmail.com</span></h4>
            <hr/>
            <br/>
            <h4>Cell:<span class="details">0715827951</span></h4>
            <hr/>
            <br/>
            <h4>Username: <span class="details">Hailey345</span></h4>
            <br/>
            <button id="edit-profile">Edit profile</button>
        </div>
        </div>
    )
}
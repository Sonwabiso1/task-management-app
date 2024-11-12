import React from 'react'
import './../../styles/Landing/memberLogin.css'

export default function MemberLog(){
    return(
        <div id="entirePage">
        <div>
            <img src="public/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw"/>
        </div>
        <div id="form">
            <h1>Member Login</h1>
            <form action="submit">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder='value' required/>
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder='value' required/>
                <button>Sign In</button>
                <br/>
                <div id="otherOptions">
                <a href="#">forgot password?</a>
                <a href="#">Sign up</a>
                </div>
            </form>
        </div>
        </div>
    )
}
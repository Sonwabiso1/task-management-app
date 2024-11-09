import React from 'react';
import './Signup.css';

export default function Signup() {
    return (
        <>
        <div id="image">
            <img src="public/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.webp" alt="profile-image"/>
        </div>
        <div id="signupPage">
            <div id="signupBar">
                <form id="signupForm">
                    <h1>Sign up</h1>
                    <label htmlFor="name">Full name:</label>
                    <input type="text" id="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />

                    <label htmlFor="staff-no">Staff number:</label>
                    <input type="text" id="staff-no" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />

                    <label htmlFor="confirm-pass">Confirm password:</label>
                    <input type="password" id="confirm-pass" required />
                </form>
            </div>
        </div>
        </>
    );
}

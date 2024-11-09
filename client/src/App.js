import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notification from './pages/notification'
import Userprofile from './pages/userprofile'
import Signup from './pages/Signup';
import MemberLog from './pages/memberLogin';

function App() {
  return (
    <>
    <MemberLog />
    {/*<Userprofile />*/}
   {/*<Notification />*/}
    {/*<Signup />*/}
    </>
  );
}

export default App;

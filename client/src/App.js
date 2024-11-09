import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notification from './pages/notification'
import Userprofile from './pages/userprofile'
import Signup from './pages/Signup';
import MemberLog from './pages/memberLogin';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

function App() {
  return (
    <>
     <Tasks />
    {/*<MemberLog />*/}
    {/*<Userprofile />*/}
   {/*<Notification />*/}
    {/*<Signup />*/}
    {/*<Projects />*/}
    </>
  );
}

export default App;

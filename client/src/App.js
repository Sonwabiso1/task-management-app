import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import NavbarLayout from './components/NavbarLayout';
import Footer from './components/footer';
// Landing Page imports
import Signup from './landing-pages/Signup';
import Home from './landing-pages/Home';
import Login from './landing-pages/Login';

// Logged-in pages
import HomeLogin from './user-pages/HomeLogin';
import Notifications from './user-pages/usernotifications';
import UserProfile from './user-pages/userprofile';
import Projects from './user-pages/Projects';
import Tasks from './user-pages/Tasks';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    {/* Public routes */}
    <Route 
      path="/" 
      element={
        <>
          <Home />
          <Footer />
        </>
      } 
    />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />

    {/* Logged-in routes */}
    <Route element={<NavbarLayout />}>
      <Route path="/logged-in-home/:id" element={<HomeLogin />} />
      <Route path="/notifications/:id" element={<Notifications />} />
      <Route path="/userprofile/:id" element={<UserProfile />} />
      <Route path="/projects/:id" element={<Projects />} />
      <Route path="/projects/:id/:projectName/tasks" element={<Tasks />} /> {/* Dynamic route for AdminTasks */}
    </Route>

    {/* Redirect or logout route */}
    <Route path="/logout" element={<Home />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;

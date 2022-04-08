
import React from 'react';
import './App.css';
import { Home, Navbar, SurveyComponent } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./user/Profile";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import Login from "./auth/Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute";
function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  
  return (

    <Router>
      
    <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            currentUser ?
            <PrivateRoute>
              <div style={{height:"100vh"}}>
             <Navbar/>
             <Home currentUser={currentUser}/>
             </div>
            </PrivateRoute>
            :
            <><Navbar/>
            <Home/></>
          
          }
        />
         <Route
          exact
          path="/quiz"
          element={
            currentUser ?
            <PrivateRoute>
             <Navbar/>
             <SurveyComponent/>
            </PrivateRoute>
            :
            <><Navbar/>
            <SurveyComponent/></>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

      </Routes>
    </AuthProvider>
  </Router>
  //   <BrowserRouter>
  //   <div className='App'>
  //   <Navbar />
  //   <Routes>
  //     <Route path="/" element={<Home />}> 
  //     </Route>
  //     <Route path="/quiz" element={<SurveyComponent/>}> 
  //     </Route>
  //   </Routes>
  //   </div>
  // </BrowserRouter>
  );
}

export default App;

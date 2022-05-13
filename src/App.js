import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/ProfilePage';
import SignIn from './pages/SignInPage';
import { useState } from "react";
import RecipiePage from './pages/RecipiePage'
import SingleRecipiePage from './pages/SingleRecipiePage'
import users from './data/UsersData'

function App() {
  const [userId, setUserId] = useState();
  const testUser = users.find((user)=> user.id === "0");
  console.log(userId)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn setUserId={setUserId}/>}/>
        <Route path='home' element={<HomePage user={testUser}/>}/>
        <Route path='profile/info' element={<Profile subtitle="Mis Datos" user={testUser}/>}/>
        <Route path='profile/mis-recetas' element={<Profile subtitle="Mis Recetas" user={testUser}/>}/>
        <Route path='profile/mis-recetas/:recipieId' element={<RecipiePage user={testUser}/>}/>
        <Route path='/receta/:recipieId' element={<SingleRecipiePage user={testUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

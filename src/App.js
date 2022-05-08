import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/ProfilePage';
import SignIn from './pages/SignInPage';

import PaellaImg from './assets/paella.jpg'
import SopaImg from './assets/sopa.jpg'
import MilaImg from './assets/mila.jpg'
import TartaImg from './assets/tarta.png'
import CarneImg from './assets/carne.jpg'
import EnsaladaImg from './assets/ensalada.jpg'
import PolloImg from './assets/pollo.jpg'


function App() {
  const testUser = { name: "Ignacio", lastname: "Rondan", mail:"nacho.rondan@gmail.com",nickname: "Nacho", age: 24, avatarUrl: 'userPicture.jpg'};
  const testChef = { name: "Mel", lastname:"Gibson", nickname:"MG" , age: 66, avatarUrl: 'MelGibson.jpg'};

  const testRecipie1 = {recipieName: "Paella", imageUrl: PaellaImg,rate: 4.5, user: testChef}
  const testRecipie2 = {recipieName: "Sopa", imageUrl: SopaImg, rate: 2, user: testChef}
  const testRecipie3 = {recipieName: "Milanesa Napolitana", imageUrl: MilaImg, rate: 2.9, user: testUser}
  const testRecipie4 = {recipieName: "Tarta de Jamon y queso", imageUrl: TartaImg, rate: 4.5, user: testChef}
  const testRecipie5 = {recipieName: "Carne al horno", imageUrl: CarneImg, rate: 2, user: testChef}
  const testRecipie6 = {recipieName: "Ensalada Cesar", imageUrl: EnsaladaImg, rate: 2.9, user: testUser}
  const testRecipie7 = {recipieName: "Pollo al disco", imageUrl: PolloImg, rate: 2, user: testChef}

  const testUserRecipies = { recipies: [testRecipie1, testRecipie2, testRecipie3], name: "Ignacio", lastname: "Rondan", mail:"nacho.rondan@gmail.com",nickname: "Nacho", age: 24, avatarUrl: 'userPicture.jpg'};

  const feed = [testRecipie1, testRecipie2, testRecipie3, testRecipie4, testRecipie5, testRecipie6, testRecipie7]
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='home' element={<HomePage feed={feed} user={testUserRecipies}/>}/>
        <Route path='profile/info' element={<Profile subtitle="Mis Datos" user={testUserRecipies}/>}/>
        <Route path='profile/mis-recetas' element={<Profile subtitle="Mis Recetas" user={testUserRecipies}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

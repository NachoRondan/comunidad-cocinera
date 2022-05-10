import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/ProfilePage';
import SignIn from './pages/SignInPage';
import RecipiePage from './pages/RecipiePage'

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

  const testRecipie1 = {recipieName: "Paella", dificulty: 1, imageUrl: PaellaImg,rate: 4.5, user: testChef}
  const testRecipie2 = {recipieName: "Sopa de Zapallo", dificulty: 4, imageUrl: SopaImg, rate: 2, user: testChef}
  const testRecipie3 = {recipieName: "Milanesa Napolitana", ingredients:[{label:'Milanesa'},{label:'Queso'},{label:'Jamon'},{label:''}], steps:[{label:'Freir Milanesa'},{label:'Agregar queso'}, {label:'Agregar Jamon'},{label:''}], description: "Una milanesa napolitana", dificulty: 1, imageUrl: MilaImg, rate: 2.9, user: testUser}
  const testRecipie4 = {recipieName: "Tarta de Jamon y queso", dificulty: 3, imageUrl: TartaImg, rate: 4.5, user: testChef}
  const testRecipie5 = {recipieName: "Carne al horno", dificulty: 5, imageUrl: CarneImg, rate: 2, user: testChef}
  const testRecipie6 = {recipieName: "Ensalada Cesar", dificulty: 1, imageUrl: EnsaladaImg, rate: 2.9, user: testUser}
  const testRecipie7 = {recipieName: "Pollo al disco", dificulty: 1, imageUrl: PolloImg, rate: 2, user: testChef}

  const testUserRecipies = { recipies: [testRecipie1, testRecipie2, testRecipie3], name: "Ignacio", lastname: "Rondan", mail:"nacho.rondan@gmail.com",nickname: "Nacho", age: 24, avatarUrl: 'userPicture.jpg'};

  const feed = [testRecipie1, testRecipie2, testRecipie3, testRecipie4, testRecipie5, testRecipie6, testRecipie7]
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='home' element={<HomePage feed={feed} user={testUserRecipies}/>}/>
        <Route path='profile/info' element={<Profile subtitle="Mis Datos" user={testUserRecipies}/>}/>
        <Route path='profile/mis-recetas' element={<Profile subtitle="Mis Recetas" user={testUserRecipies}/>}/>
        <Route path='profile/mis-recetas/receta' element={<RecipiePage recipie={testRecipie3} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import SignIn from "./pages/SignInPage";
import Registrarse from "./pages/RegistrarsePage";
import PassRecovery from "./pages/PassRecoveryPage";
import RecipieEditorPage from "./pages/RecipieEditorPage";
import SingleRecipiePage from "./pages/SingleRecipiePage";
import NewRecipiePage from "./pages/NewRecipiePage";
import users from "./data/UsersData";

function App() {
  const [userId, setUserId] = useState();
  const testUser = users.find((user) => user.id === "0");
  console.log(userId);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn setUserId={setUserId} />} />
        <Route path="passrecovery" element={<PassRecovery />} />
        <Route path="registrarse" element={<Registrarse />} />
        <Route path="home" element={<HomePage user={testUser} />} />
        <Route
          path="profile/info"
          element={<Profile subtitle="Mis Datos" user={testUser} />}
        />
        <Route
          path="profile/mis-recetas"
          element={<Profile subtitle="Mis Recetas" user={testUser} />}
        />
        <Route
          path="profile/mis-recetas/:recipieId"
          element={<RecipieEditorPage user={testUser} />}
        />
        <Route
          path="/receta/:recipieId"
          element={<SingleRecipiePage user={testUser} />}
        />
        <Route
          path="/nueva-receta/:recipieName"
          element={<NewRecipiePage user={testUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// CSS
import './App.css'

// TOOLS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import MainPage from './pages/main/MainPage.tsx'
import User from './pages/user/User.tsx';

//JSON
import db from "./json/db.json";
import { useState } from 'react';

function App() {
  const [userP, setUserP] = useState(0)
  // localStorage.getItem("profile")
  localStorage.profile ? setUserP(localStorage.profile) : console.log(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/user' element={<User db={db} user={userP}/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App




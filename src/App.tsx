// CSS
import './App.css'

// TOOLS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import MainPage from './pages/main/MainPage.tsx'
import User from './pages/user/User.tsx';

//JSON
import db from "./json/db.json";

function App() {
  const defaultUser : number = 0;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/user' element={<User db={db} user={defaultUser}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App




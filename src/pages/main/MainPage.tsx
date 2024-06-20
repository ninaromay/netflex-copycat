// TOOLS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//HOOKS
import { useState } from 'react';

//COMPONENTS
import Profiles from '../profiles/Profiles';
import User from '../user/User';
import Menu from '../../components/Menu/Menu';
import Series from '../series/Series';
import Films from '../films/Films';
import NewAndPopular from '../newAndPopular/NewAndPopular';
import MyList from '../myList/MyList';
import ByLanguage from '../bylang/ByLanguage';

// JSON
import profilesJson from "../../json/profile.json";
import db from "../../json/db.json";

function MainPage() {
  const [page, setPage] = useState('logged');
  const [profiledId, setProfiledId] = useState(0);
  
  const handleProfile = (id : number) =>{
    setProfiledId(id);
    console.log(id);
    if(localStorage.length === 0){
      localStorage.setItem("profile", `${id}`);
    }
  }

  console.log('LocalStorage: ' , localStorage);

  return (
    <BrowserRouter>
    
    { page === 'logged' ?
      (localStorage.length === 0 ? <Profiles data={profilesJson} id={handleProfile}/> : 
      <>
        <Menu />
        <Routes>
          <Route path='/' element={<User db={db} user={profilesJson[profiledId]}/>} />
          <Route path='/user' element={<User db={db} user={profilesJson[profiledId]}/>} />
          <Route path='/series' element={<Series db={db} user={profilesJson[profiledId]}/>} />
          <Route path='/films' element={<Films db={db} user={profilesJson[profiledId]}/>} />
          <Route path='/new-and-popular' element={<NewAndPopular db={db} user={profilesJson[profiledId]}/>} />
          <Route path='/my-list' element={<MyList db={db} user={profilesJson[profiledId]}/>} />
          <Route path='/by-lang' element={<ByLanguage db={db} user={profilesJson[profiledId]}/>} />
        </Routes>
      </>)
    : 
    <div className='log-in-container'>
      LOG IN
    </div> 
    }
    
    </BrowserRouter>
  )
}

export default MainPage;
//HOOKS
import { useState } from 'react';

//COMPONENTS
import Profiles from '../profiles/Profiles';
import User from '../user/User';
import Menu from '../../components/Menu/Menu';

// JSON
import profilesJson from "../../json/profile.json";
import db from "../../json/db.json";

function MainPage() {
<<<<<<< HEAD
  const profiles : ProfileType[] = profilesJson;
  const [page, setPage] = useState('user');
  const [profiled, setProfiled] = useState(false);
  const [profiledId, setProfiledId] = useState(0);
  
  const handleProfile = (id : number) =>{
    setProfiled(true);
    setProfiledId(id);
  }
=======
  const [logged, setLogged] = useState(true);
>>>>>>> 3742da0d39d3fef5238a4ab419c6f30ab1c033e4

  return (
    <>
    {page !== 'logged' ?
      (!profiled ? <Profiles data={profilesJson} id={handleProfile}/> : 
      <>
        <Menu />
        {page === 'user' && <User db={db} user={profiles[profiledId]} />}
      </>)
    : 
    <div className='log-in-container'>
      LOG IN
    </div> 
    }
    </>
  )
}

export default MainPage;

// TYPES
type ProfileType = {
  id: number;
  userName: string;
  ageLimit: string;
  img : string;
  isLocked : boolean;
}
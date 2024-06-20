//CSS
import './Profiles.css';

<<<<<<< HEAD
//COMPONENTS
import TopShadow from '../../components/TopShadow';

const Profiles : any = (data : any) =>{
  const profiles : ProfileType[] = data.data;
  const handler : Function = data.id;

  const proMsge = 'Who are you? Choose your profile'
=======
//HOOKS
import { useEffect, useState } from 'react';

//COMPONENTS
import User from '../user/User';

//JSON
import db from "../../json/db.json";
import TopShadow from '../../components/Shadows/TopShadow';

const Profiles : any = (data : any) =>{
    const profiles : ProfileType[] = data.data;
    const [profiled, setProfiled] = useState(false);
    const [profileId, setProfileId] = useState (0);
  
    const handleProfile = (id : number) =>{
      setProfiled(true);
      setProfileId(id);
      localStorage.setItem("profile", `${profileId}`);
      console.log("localS: " + localStorage)

    }
>>>>>>> 3742da0d39d3fef5238a4ab419c6f30ab1c033e4

    useEffect(() => {
      setInterval(() =>{
        localStorage.clear();
    }, 1000000);
    });

  return (
    <>
    <TopShadow />
<<<<<<< HEAD
    <div className='profiles-container'>
      <p className='profile-question'>{proMsge}</p>
      <ul className='profiles'>
        {profiles.map((profile : ProfileType) => 
          <li key={profile.id} className='profile'>
            <img className='profile-img' src={profile.img} alt={`logo-${profile.id + 1}`} onClick={() => handler(profile.id)} />
            <p className='profile-user'>{profile.userName}</p>
            {profile.isLocked ? <img className='lock' src="src/assets/profiles/lock.svg" alt="lock" /> : ""}
          </li>
        )}
      </ul>
    </div>
=======
    {!profiled ?
        <div className='profiles-container'>
          <p className='profile-question'>Who are you? Choose your profile</p>
          <ul className='profiles'>
              {profiles.map((profile : ProfileType) => 
                  <li key={profile.id} className='profile'>
                      <img className='profile-img' src={profile.img} alt={`logo-${profile.id + 1}`} onClick={() => handleProfile(profile.id)} />
                      <p className='profile-user'>{profile.userName}</p>
                      {profile.isLocked ? <img className='lock' src="src/assets/profiles/lock.svg" alt="lock" /> : ""}
                  </li>
              )}
          </ul>
        </div>
        : <User db={db} user={profiles[profileId]} />
    }
>>>>>>> 3742da0d39d3fef5238a4ab419c6f30ab1c033e4
    </>
  )
}

export default Profiles;

// TYPES
type ProfileType = {
    id: number;
    userName: string;
    ageLimit: string;
    img : string;
    isLocked : boolean;
}
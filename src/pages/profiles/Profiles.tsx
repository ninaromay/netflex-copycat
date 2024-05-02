//CSS
import './Profiles.css';

//HOOKS
import { useState } from 'react';

//COMPONENTS
import User from '../user/User';

//JSON
import db from "../../json/db.json";
import TopShadow from '../../components/TopShadow';

const Profiles : any = (data : any) =>{
    const profiles : ProfileType[] = data.data;
    const [profiled, setProfiled] = useState(false);
    const [profileId, setProfileId] = useState (0);
  
    const handleProfile = (id : number) =>{
      setProfiled(true);
      setProfileId(id);
    }

  return (
    <>
    <TopShadow />
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
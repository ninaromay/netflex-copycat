//CSS
import './Profiles.css';

//COMPONENTS
import TopShadow from '../../components/TopShadow';

const Profiles : any = (data : any) =>{
  const profiles : ProfileType[] = data.data;
  const handler : Function = data.id;

  const proMsge = 'Who are you? Choose your profile'

  return (
    <>
    <TopShadow />
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
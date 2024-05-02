//HOOKS
import { useEffect, useState } from 'react';

//COMPONENTS
import Profiles from '../profiles/Profiles';

// JSON
import profilesJson from "../../json/profile.json";

function MainPage() {
  const [logged, setLogged] = useState(true);
  // useEffect(() => {
  //   logged ? console.log("This is the json profiles " , profilesJson) : console.log("User logged off") ;
  // }, [logged])

  return (
    <>
    {logged ?
      <Profiles data={profilesJson}/>
    : 
    <div className='log-in-container'>
        LOG IN
    </div> 
    }
    </>
  )
}

export default MainPage;
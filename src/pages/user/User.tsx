// CSS
import "./User.css";

// COMPONENTS
import Billboard from "../../components/Billboard/Billboard.tsx";

// HOOKS
import { useState } from "react";

const User : any = (data : any) =>{
    const db : DB[] = data.db;
    const user : ProfileType = data.user;

    const [hero, setHero] = useState(0);
    const heroHandler = (hero : number) : any => {
        const heroSum = hero + 1;
        setHero(heroSum);
        if(user.ageLimit < db[heroSum].ageLimit){
            heroHandler(heroSum);
        } else {
            setHero(heroSum);    
        }
    }

    if(user.ageLimit < db[hero].ageLimit){
        heroHandler(hero);
    }

    const svg : SvgGroup = {
        play:   "src/assets/user/media/play.svg",
        info:   "src/assets/user/media/moreInfo.svg",
    }

    return(
        <div className="user-container">
            <Billboard billboard={db[hero]} svg={svg}/>
        </div>
    )
}

export default User;

// TYPE
type DB = {
    id : number;
    slug : string;
    type : string;
    name : string;
    description : string;
    bgImg : string;
    logo : string;
    position : number;
    ageLimit : string;
    moreInformation : MoreInformation;
    miniature : string;
    episodes : Array<Episodes>;
}

type MoreInformation = {
    infoBg : string;
    match : string;
    published : number;
    subType : string;
    isHD : boolean;
    hasSubs: boolean;
    warnings : Array<string>;
    director? : string;
    duration? : string;
    cast : Array<string>;
    genres : Array<string>;
    thisIs : Array<string>;
}

type Episodes ={
    number : number;
    caption : string;
    tittle : string;
    shortDescription : string;
    duration : string ;
}

type ProfileType = {
    id: number;
    userName: string;
    ageLimit: string;
    img : string;
    isLocked : boolean;
}

type SvgGroup = {
    play: string;
    info: string;
}
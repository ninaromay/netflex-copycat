// CSS
import "./User.css";

// COMPONENTS
import CardSlider from "../../components/CardSlider/CardSlider";
import BottomShadow from "../../components/Shadows/BottomShadow";
import Billboard from "../../components/Card/Billboard";

// HOOKS
import { useState, useEffect } from "react";

const User : any = (data : any) =>{
    const db : DB[] = data.db;
    const user : ProfileType = data.user;
    console.log(user);
    

    const titleList : TitleList= {
        myList: 'My List',
        continue: 'Continue watching for ',
        userSpecific : user.userSpecificTitles
    }

    // Change background on a Timer
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
    useEffect(() => {
        setInterval(() =>{
            window.location.replace("http://localhost:5173/");
        }, 1000000);
    });

    if(user.ageLimit < db[hero].ageLimit){
        heroHandler(hero);
    }

    const myList : any = [];
    if(user.userSpecificTitles.length > 0){
        console.log(user.userSpecificTitles);
    }

    return(
        <div className="user-container">
            <Billboard billboard={db[hero]} />
            <BottomShadow />
            <div className="sliders">
                <CardSlider title={titleList.myList} slider={db}/>
            </div>
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
    title : string;
    shortDescription : string;
    duration : string ;
}

type ProfileType = {
    id: number;
    userName: string;
    ageLimit: string;
    img : string;
    isLocked : boolean;
    password: string;
    myList: number[]
    userSpecificTitles : string[];
}

type TitleList = {
    myList: string;
    continue: string;
    userSpecific : string[];
}
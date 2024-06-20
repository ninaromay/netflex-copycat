// CSS
<<<<<<< HEAD
import "./User.css";

// COMPONENTS
import Billboard from "../../components/Billboard/Billboard.tsx";
=======
import "./User.css"
>>>>>>> 3742da0d39d3fef5238a4ab419c6f30ab1c033e4

// COMPONENTS
import CardSlider from "../../components/CardSlider/CardSlider";
import Menu from "../../components/Menu/Menu";
import TopShadow from "../../components/Shadows/TopShadow";
import BottomShadow from "../../components/Shadows/BottomShadow";
import Billboard from "../../components/Card/Billboard";

// HOOKS
import { useState, useEffect } from "react";

// TOOLS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const User : any = (data : any) =>{
    const db : DB[] = data.db;
    const user : ProfileType = data.user;

    // Change background on a Timer
    const [hero, setHero] = useState(0);
<<<<<<< HEAD
    const heroHandler = (hero : number) : any => {
        const heroSum = hero + 1;
        setHero(heroSum);
        if(user.ageLimit < db[heroSum].ageLimit){
            heroHandler(heroSum);
        } else {
            setHero(heroSum);    
        }
=======
    const heroHandler = (hero : number) => {
        if(hero >= db.length - 1){
            return setHero(0)
        }

        if (user.ageLimit < db[hero].ageLimit){
            heroHandler(hero + 1)
        }
        setHero(hero + 1);
>>>>>>> 3742da0d39d3fef5238a4ab419c6f30ab1c033e4
    }
    useEffect(() => {
        setInterval(() =>{
            window.location.replace("http://localhost:5173/");
        }, 1000000);
    });

<<<<<<< HEAD
    if(user.ageLimit < db[hero].ageLimit){
        heroHandler(hero);
    }
=======
    const billboard : any = db[hero];
>>>>>>> 3742da0d39d3fef5238a4ab419c6f30ab1c033e4

    if (user.ageLimit < billboard.ageLimit){
        heroHandler(hero)
    }

    return(
<<<<<<< HEAD
        <div className="user-container">
            <Billboard billboard={db[hero]} svg={svg}/>
        </div>
=======
        <>
            <Menu />
            {/* LOADING SCREEN */}
            <div className="home-container">
                <BottomShadow />
                <Billboard billboard={billboard}/>
            </div>
            <div className="home-slider-container">
                <CardSlider slider={db} title={"New on Netflex"}/>
                <CardSlider slider={db} title={"New on Netflex"}/>
            </div>
            <TopShadow />
        </>
>>>>>>> 3742da0d39d3fef5238a4ab419c6f30ab1c033e4
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
}

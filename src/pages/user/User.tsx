// CSS
import Menu from "../../components/Menu/Menu";
import TopShadow from "../../components/TopShadow";
import "./User.css"

// HOOKS
import { useState } from "react";

const User : any = (data : any) =>{
    const db : DB[] = data.db;
    const user : ProfileType = data.user;

    const [hero, setHero] = useState(0);
    const heroHandler = () => {
        console.log(hero)
        setHero(hero + 1)
        console.log(hero)
        user.ageLimit < db[hero+1].ageLimit ? heroHandler() : setHero(hero);    
    }

    const billboard : any = db[0];

    const svg : SvgGroup = {
        play:   "src/assets/user/media/play.svg",
        info:   "src/assets/user/media/moreInfo.svg",
    }

    return(
        <>
        {/* LOADING SCREEN */}
        <Menu/> 
        <div className="home-container">
            <img className="home-billboard" src={billboard.bgImg} alt="hero-billboard" />
            <div className="home-billboard-info">
                <img className="hero-billboard-logo" src={billboard.logo} alt="hero-logo" />
                {billboard.type === "series" ? <p className="home-billboard-watch">Watch the {billboard.moreInformation.subType ? billboard.moreInformation.subType : billboard.type}</p> : ""}
                 <p className="home-billboard-description">{billboard.description}</p>
                <div className="home-billboard-btn-group">
                    <span className="home-billboard-btn home-play-btn">
                        <img src={svg.play} alt="svg-play"/>
                        <span>Play</span>
                    </span>
                    <span className="home-billboard-btn home-info-btn">
                        <img src={svg.info} alt="svg-info"/>
                        <span>More Info</span>
                    </span>
                </div>
            </div>
        </div>
        <>
        
        </>
        <TopShadow />
        </>
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
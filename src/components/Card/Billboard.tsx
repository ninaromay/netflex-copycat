import "./Billboard.css"

function Billboard (data : any) {
    const billboard = data.billboard;

    const svg : SvgGroup = {
        play:   "src/assets/user/media/play.svg",
        info:   "src/assets/user/media/moreInfo.svg",
    }

    return(
        <>
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
                <span className="home-billboard-maturity-rating"><p>{billboard.ageLimit+"+"}</p></span>
            </div>
        </>
    )
}

export default Billboard


type SvgGroup = {
    play: string;
    info: string;
}
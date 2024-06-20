import './Billboard.css';

const Billboard = (props : any) => {
    const billboard = props.billboard;
    const svg = props.svg;
        
    return(
    <>
        <img className="billboard" src={billboard.bgImg} alt="hero-billboard" />
        <div className="billboard-info">
            <img className="hero-billboard-logo" src={billboard.logo} alt="hero-logo" />
            {billboard.type === "series" ? <p className="billboard-watch">Watch the {billboard.moreInformation.subType ? billboard.moreInformation.subType : billboard.type}</p> : ""}
             <p className="billboard-description">{billboard.description}</p>
            <div className="billboard-btn-group">
                <span className="billboard-btn play-btn">
                    <img src={svg.play} alt="svg-play"/>
                    <span>Play</span>
                </span>
                <span className="billboard-btn info-btn">
                    <img src={svg.info} alt="svg-info"/>
                    <span>More Info</span>
                </span>
            </div>
        </div>
    </>
    )
}

export default Billboard;
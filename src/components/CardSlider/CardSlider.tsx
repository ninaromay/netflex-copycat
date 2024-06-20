import Card from "../Card/Card"
import "./CardSlider.css"

const CardSlider = (data : any) =>{
    console.log('data slider ' ,data.slider);
    
    const card = data.slider;
    const title : string = data.title;

    return(
        <div className="card-slider-container">
            <p className="card-slider-title">{title}</p>
            <ul className="card-slider" >
                {card.map( (card : any) => <li key={card.id}><Card card={card} /></li>)}
            </ul>
        </div>
    )
}

export default CardSlider
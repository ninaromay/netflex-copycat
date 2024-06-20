import "./Card.css"

const Card = (card : any) =>{
    const cardContent : any = card.card;
    return(
        <div className="card">
            <div className="card-content">
                <img className="card-img" src={cardContent.miniature} alt={cardContent.slug} />
            </div>
        </div>
    )
}

export default Card
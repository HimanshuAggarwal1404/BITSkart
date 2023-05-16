import './Card.css';

function Card(props){
    return(
        <div className="card">
            <img src={props.src} alt={props.alt}></img>

            
        </div>
    )
}
export default Card;
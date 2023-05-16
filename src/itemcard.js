import './itemCard.css';

function ItemCard(props){
    return(
        <div className="itemcard">
            <div className='image'> <img className='img' src={props.src} alt={props.alt}></img></div>
            <div className='itemname'>
                {props.name}

            </div>
            <div className='price'>₹{props.price}</div>

        </div>
    )
}
export default ItemCard;
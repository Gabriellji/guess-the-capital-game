import './style.css';

const Card = ({ capital, onClick, id }) => (
    <div className="btn" onClick={(e) => onClick(e)}>
        <div className="in_btn" id={id} >{capital}</div>
    </div>
)

export default Card;
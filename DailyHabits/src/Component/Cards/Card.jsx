import "./Card.css";
const Card = ({ title, buttonText, handleClick }) => {
  return (
    <div className="card">
      <div className="title">
        <p>{title}</p>
        <button className="buttonText" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;

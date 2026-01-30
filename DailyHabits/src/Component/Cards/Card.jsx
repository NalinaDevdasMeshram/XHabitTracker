import "./Card.css";
const Card = ({ title, buttonText }) => {
  return (
    <div className="card">
      <div className="title">
        <p>{title}</p>
        <button className="buttonText">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;

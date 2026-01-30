import "./Completions.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
const Completions = ({ title, details, category }) => {
  <div className="card">
    <div className="cardInner">
      <div className="cardIcon">
        {details.category == "Reading"}
        {details.category == "Exercise"}
        {details.category == "Meditation"}
      </div>
      <div className="cardInfo">
        <h5>{details.title}</h5>
        <p>{details.date}</p>
      </div>
    </div>

    <div className="cardInner">
      {/* <p className={styles.cardPrice}>{`₹${details.price}`}</p> */}
      <div className="cardButtonWrapper">
        <button className="cardDelete" onClick={handleDelete}>
          <IoMdCloseCircleOutline />
        </button>
        <button className="cardEdit" onClick={handleEdit}>
          <MdOutlineModeEdit />
        </button>
      </div>
    </div>
  </div>;
};

export default Completions;

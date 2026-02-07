import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import "./DailyCompletion.css";

const DailyCompletion = ({ title, data, onDelete, onEdit }) => {
  return (
    <div className="outerContainer">
      <h2>{title}</h2>
      {data.length === 0 ? (
        <p>No Progress to Show!</p>
      ) : (
        data.map((item, index) => {
          return (
            <div className="completionCard" key={index}>
              <div className="cardbox">
                <p>{item.description}</p>
                <p className="habits">{item.habits.join(" ")}</p>
              </div>
              <div className="btn">
                <p>{item.date}</p>
                <button className="closebtn" onClick={() => onDelete(index)}>
                  <IoIosCloseCircleOutline size={20} />
                </button>
                <button
                  className="editbtn"
                  size={20}
                  onClick={() => onEdit(index)}
                >
                  <CiEdit />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default DailyCompletion;

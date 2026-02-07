import { useState } from "react";
import "./Form.css";
const Form = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [habits, setHabits] = useState([]);

  const handleCheckboxData = (habits) => {
    setHabits((prev) =>
      prev.includes(habits)
        ? prev.filter((h) => h !== habits)
        : [...prev, habits],
    );
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    onSubmit({ date, habits, description });
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmitData}>
        <h3>what Did You Do Today?</h3>
        <label htmlFor="date">
          Date:{" "}
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <div className="checklabel_box">
          <label htmlFor="Reading">
            <input
              type="checkbox"
              name="reading"
              onChange={() => handleCheckboxData("Reading")}
            />
            Reading
          </label>
          <label htmlFor="Exercise">
            <input
              type="checkbox"
              name="exercise"
              onChange={() => handleCheckboxData("Exercise")}
            />
            Exercise
          </label>
          <label htmlFor="Meditation">
            <input
              type="checkbox"
              name="meditaton"
              onChange={() => handleCheckboxData("Meditation")}
            />
            Meditation
          </label>
        </div>
        <label htmlFor="Short Descript">
          Short Description:
          <input
            type="text"
            placeholder="Enter a short description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submitbtn">
          Submit
        </button>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;

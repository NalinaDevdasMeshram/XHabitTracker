import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [submitbtn, setSubmitbtn] = useState();

  return (
    <div className="formWrapper">
      <form>
        <h3>what Did You Do Today?</h3>
        <label htmlFor="date">
          Date: <input type="date" required />
        </label>
        <div className="checklabel_box">
          <label htmlFor="Reading">
            <input type="Checkbox" />
            Reading
          </label>
          <label htmlFor="Exercise">
            <input type="Checkbox" />
            Exercise
          </label>
          <label htmlFor="Meditation">
            <input type="Checkbox" />
            Meditation
          </label>
        </div>
        <label htmlFor="Short Descript">
          Short Description:
          <input type="text" placeholder="Enter a Short Description" required />
        </label>
        <button type="submit" className="submitbtn">
          Submit
        </button>
        <button className="cancelbtn">Cancel</button>
      </form>
    </div>
  );
};

export default Form;

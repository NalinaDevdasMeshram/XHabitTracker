import "./Form.css";
const Form = () => {
  return (
    <div className="form-container">
      <form>
        <h2>what Did You Do Today?</h2>
        <label htmlFor="date">Date:</label>
        <input type="date" />
        <label>Reading</label>
        <input type="checkbox" id="reading" />
        <input type="checkbox" id="Exerice" />
        <label>Exerice</label>
        <input type="checkbox" id="Meditation" />
        <label>Meditation</label>
        <label htmlFor="Short Descript">Short Description:</label>
        <input type="text" placeholder="Enter a Short Description" />
        <button>Submit</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default Form;

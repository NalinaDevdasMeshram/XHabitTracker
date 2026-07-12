const PersonDetailForm = () => {
  return (
    <form>
      <h1>Create your PopX Account</h1>
      <label htmlFor="">Full Name</label>
      <input type="text" placeholder="Marry Deo" />
      <label>phone Number</label>
      <input type="Number" placeholder="Marry Deo" />
      <label>Email Address</label>
      <input type="Number" placeholder="Marry Deo" />
      <label>Password</label>
      <input type="Number" placeholder="Marry Deo" />
      <label>Company Name</label>
      <input type="text" placeholder="Marry Deo" />
      Are you an Agency?
      <input type="Radio">Yes</input>
      <input type="radio">No</input>
      <button>Create Account</button>
    </form>
  );
};

export default PersonDetailForm;

const Userform = () => {
  return (
    <form>
      <h2>User Form</h2>
      <input type="text" placeholder="Enter First Name" required />
      <input type="text" placeholder="Enter Last Name" required />
      <input type="number" placeholder="Enter Mobile" required />
      <input type="Email" placeholder="Enter Email" required />
      <button>Submit</button>
    </form>
  );
};

export default Userform;

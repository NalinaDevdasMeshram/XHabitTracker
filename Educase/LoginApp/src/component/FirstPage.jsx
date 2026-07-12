import "../App.css";

const FirstPage = () => {
  return (
    <div className="card">
      <div className="topSection"></div>

      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button className="createBtn">Create Account</button>

        <button className="loginBtn">Already Registered? Login</button>
      </div>
    </div>
  );
};

export default FirstPage;

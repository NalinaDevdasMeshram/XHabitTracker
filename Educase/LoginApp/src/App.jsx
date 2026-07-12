import "./App.css";
import FirstPage from "./component/FirstPage.jsx";
import Login from "./component/Login.jsx";
import PersonDetailForm from "./component/PersonDetailForm.jsx";
import AccountSetting from "./component/AccountSetting.jsx";
const App = () => {
  return (
    <div className="container">
      <FirstPage />
      <Login />
      <PersonDetailForm />
      <AccountSetting />
    </div>
  );
};

export default App;

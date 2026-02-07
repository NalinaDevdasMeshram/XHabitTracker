import "./Home.css";
import Card from "../Cards/Card";
import PieChart from "../Piechart/PieChart.jsx";
import BarChart from "../BarChart/BarChart.jsx";
import Modals from "../Modal/Modals.jsx";
import DailyCompletion from "../DailyCompletion/DailyCompletion.jsx";
import Completions from "../CompletionsCard/Completions.jsx";
import { useState, useMemo } from "react";
import Form from "../form/Form.jsx";

const Home = () => {
  //show hide modal
  const [isOpen, setIsOpen] = useState(false);
  const [dailyCompletion, setDailyCompletion] = useState([]);
  const habitStats = useMemo(() => {
    const counts = {};

    dailyCompletion.forEach((item) => {
      item.habits.forEach((habit) => {
        counts[habit] = (counts[habit] || 0) + 1;
      });
    });

    return Object.entries(counts).map(([name, value]) => ({
      name,
      value,
    }));
  }, [dailyCompletion]);
  const handleFormOpen = () => {
    setIsOpen(true);
    console.log("form is open");
  };

  const handleSubmitForm = (data) => {
    setDailyCompletion((prev) => [...prev, data]);
    setIsOpen(false);
  };
  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*card, piechart and BarChart wrapper*/}
      <div className="card_container">
        <Card
          title="Update Today's Progress"
          buttonText="+ Add data"
          handleClick={handleFormOpen}
        />
        <PieChart titlePieChart="Average Completions" data={habitStats} />
        <BarChart titleBarChart="Top Habits (Last Week)" data={habitStats} />
      </div>
      {/* Daily Completions */}
      <DailyCompletion
        title="Recent Daily Completions"
        data={dailyCompletion}
      />
      <Completions />
      {/* modal */}
      <Modals isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form onSubmit={handleSubmitForm} />
      </Modals>
    </div>
  );
};

export default Home;

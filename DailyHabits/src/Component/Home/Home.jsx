import "./Home.css";
import Card from "../Cards/Card";
import PieChart from "../Piechart/PieChart.jsx";
import BarChart from "../BarChart/BarChart.jsx";
import Modals from "../Modal/Modals.jsx";
import DailyCompletion from "../DailyCompletion/DailyCompletion.jsx";
import Completions from "../CompletionsCard/Completions.jsx";
import { useState } from "react";
import Form from "../form/Form.jsx";

const Home = () => {
  //show hide modal
  const [isOpen, setIsOpen] = useState(false);
  const handleFormOpen = () => {
    console.log("Form Opened");
    setIsOpen(true);
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
        <PieChart
          titlePieChart="Average Completions"
          data={[
            {
              name: "Reading",
            },
            {
              name: "Exercise",
            },
            {
              name: "Meditation",
            },
          ]}
        />
        <BarChart
          titleBarChart="Top Habits (Last Week)"
          data={[
            {
              name: "Reading",
              category: "value.Reading",
            },
            {
              name: "Exercise",
              category: "value.Exercise",
            },
            {
              name: "Meditation",
              category: "value.Meditation",
            },
          ]}
        />
      </div>
      {/* Daily Completions */}
      <DailyCompletion
        title="Recent Daily Completions"
        details="details"
        category="category"
      />
      <Completions />
      {/* modal */}
      <Modals isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form />
      </Modals>
    </div>
  );
};

export default Home;

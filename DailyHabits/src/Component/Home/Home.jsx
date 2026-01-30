import "./Home.css";
import Card from "../Cards/Card";
import PieChart from "../Piechart/PieChart.jsx";
import BarChart from "../BarChart/BarChart.jsx";
const Home = () => {
  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*card, piechart and BarChart wrapper*/}
      <div className="card_container">
        <Card
          title="Update today's Progress"
          buttonText="+Add Data"
          buttonType="Success"
        />
        <PieChart
          titlePieChart="Average Completions"
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
        <BarChart titleBarChart="Top Habits (Last Week)" />
      </div>
    </div>
  );
};

export default Home;

import "./Home.css";
import Card from "../Cards/Card";
import PieChart from "../Piechart/PieChart.jsx";
import BarChart from "../BarChart/BarChart.jsx";
import Modals from "../Modal/Modals.jsx";
import DailyCompletion from "../DailyCompletion/DailyCompletion.jsx";
import Completions from "../CompletionsCard/Completions.jsx";
import { useState, useMemo, useEffect } from "react";
import Form from "../form/Form.jsx";

const Home = () => {
  //show hide modal
  const [isOpen, setIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState();
  // data persist in local storage
  const [dailyCompletion, setDailyCompletion] = useState(() => {
    const localStorageData = localStorage.getItem("habits");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(dailyCompletion));
  }, [dailyCompletion]);

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
  const handleFormOpen = (formData) => {
    setIsOpen(true);
    if (editIndex !== null) {
      // EDIT MODE
      setDailyCompletion((prev) =>
        prev.map((item, index) => (index === editIndex ? formData : item)),
      );
    } else {
      // ADD MODE
      setDailyCompletion((prev) => [...prev, formData]);
    }

    setEditIndex(null);
    // setIsOpen(false);
  };

  const handleSubmitForm = (data) => {
    setDailyCompletion((prev) => [...prev, data]);
    setIsOpen(false);
  };
  // delete data
  const handleDelete = (indexToRemove) => {
    setDailyCompletion((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };
  // Edit the form details
  const handleEdit = (index) => {
    setEditIndex(index);
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
        <PieChart titlePieChart="Average Completions" data={habitStats} />
        <BarChart titleBarChart="Top Habits (Last Week)" data={habitStats} />
      </div>
      {/* Daily Completions */}
      <DailyCompletion
        title="Recent Daily Completions"
        data={dailyCompletion}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <Completions />
      {/* modal */}
      <Modals isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form
          onSubmit={handleSubmitForm}
          initialData={editIndex !== null ? dailyCompletion[editIndex] : null}
        />
      </Modals>
    </div>
  );
};

export default Home;

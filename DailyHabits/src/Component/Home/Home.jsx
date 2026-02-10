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
  const [editIndex, setEditIndex] = useState(null);

  // data persist in local storage
  const [dailyCompletion, setDailyCompletion] = useState(() => {
    const localStorageData = localStorage.getItem("habits");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    if (dailyCompletion.length >= 0) {
      localStorage.setItem("habits", JSON.stringify(dailyCompletion));
    }
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

  //  open form add
  const handleAdd = () => {
    setEditIndex(null);
    setIsOpen(true);
  };
  const handlecancel = () => {
    setEditIndex(null);
    setIsOpen(false);
  };
  const handleSubmitForm = (formData) => {
    if (editIndex !== null) {
      // EDIT MODE
      setDailyCompletion((prev) =>
        prev.map((item, index) => (index === editIndex ? formData : item)),
      );
    } else {
      // ADD MODE
      setDailyCompletion((prev) => [...prev, formData]);
    }
    setIsOpen(false);
    setEditIndex(null);
  };

  // const handleSubmitForm = (data) => {
  //   setDailyCompletion((prev) => [...prev, data]);
  //   setIsOpen(false);
  // };

  // delete data
  const handleDelete = (id) => {
    setDailyCompletion((prev) => prev.filter((item) => item.id !== id));
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
          handleClick={handleAdd}
          handleCancel={handlecancel}
        />
        <PieChart titlePieChart="Average Completions" data={habitStats} />
        <BarChart titleBarChart="Top Habits (Last Week)" data={habitStats} />
      </div>
      {/* Daily Completions */}
      <DailyCompletion
        title="Recent Habit Completions"
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
          handleCancel={() => setIsOpen(false)}
        />
      </Modals>
    </div>
  );
};

export default Home;

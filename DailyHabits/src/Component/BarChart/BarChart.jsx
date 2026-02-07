import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./BarChart.css";

export default function HorizontalBarChart({ titleBarChart, data }) {
  return (
    <div className="barChart_container" width="100%" height={250}>
      <h3 className="titleChart">{titleBarChart}</h3>
      <BarChart
        className="bar_card"
        width={500}
        height={250}
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 40, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="value" fill="#7C7CE6" barSize={28} />
      </BarChart>
    </div>
  );
}

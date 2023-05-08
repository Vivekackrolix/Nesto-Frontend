// import React from "react";
import { Container } from "react-bootstrap";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Legend,
} from "recharts";

const data = [
  { name: "2018", uv: 4000, pv: 2400 },
  { name: "2019", uv: 3000, pv: 1398 },
  { name: "2020", uv: 2000, pv: 9800 },
  { name: "2021", uv: 2780, pv: 3908 },
  { name: "2022", uv: 1890, pv: 4800 },
  { name: "2023", uv: 2390, pv: 3800 },
];

const Charts = () => (
  <>
    <h3 className="heading mt-3 mb-3">Property Invoices</h3>
    <Container
      className="dashboard__wrapper__filter border border-light rounded shadow-sm"
      style={{ boxShadow: "0px 10.7036px 46.8282px rgba(0, 0, 0, 0.07)" }}
    >
      <div className="d-flex justify-content-between mt-2">
        <h4>The Graph shows the quarterly average rates of properties</h4>
        <button className="rounded-pill" style={{ background: "#F8F7F7" }}>
          Last 5 Years
        </button>
      </div>
      <p style={{ color: "#B8B8B8" }}>AVG. PROPERTY RATE</p>
      <LineChart
        width={400}
        height={400}
        data={data}
        // margin={{ top: 5, right: 10, left: 5, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        <Legend />
      </LineChart>
    </Container>
  </>
);

export default Charts;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import './StackedBarChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      ticks: {
        align: 'center',
      },
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true,
        stepSize: 5, // set step size to 5
        callback: function (value, index, values) {
          if (value === 0) {
            return '$' + value;
          } else {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'k'; // Remove space and add comma
          }
        },
      },
      grid: {
        display: false,
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
  radius: 5, // Add radius to bars
  barPercentage: 0.8, // Add gap between bars
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr'];

const data = {
  labels,
  datasets: [
    {
      label: 'Mature',
      data: [0, 10, 15, 20],
      backgroundColor: '#278FD9',
      borderColor: 'transparent',
      barThickness: 30, // add thickness to bars
      borderRadius: 9.1, // add radius to bars
    },
    {
      label: 'Not Mature',
      data: [25, 30, 35, 40],
      backgroundColor: '#FC5C67',
      borderColor: 'transparent',
      barThickness: 30, // add thickness to bars
      borderRadius: 9.1, // add radius to bars
    },
    {
      label: 'Assigned',
      data: [45, 50, 55, 60],
      backgroundColor: '#FFAFAF',
      borderColor: 'transparent',
      barThickness: 30, // add thickness to bars
      borderRadius: 9.1, // add radius to bars
    },
  ],
};

export const StackedBarChart = () => {
  return <Bar options={options} data={data} />;
};

const StackedBarChartDashboard = () => {
  return (
    <Card className="shadow-sm border-0 stacked-bar-chart">
      <Card.Header className="bg-transparent">
        <Card.Title className="fw-semibold">Loan</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center stacked-bar">
          <span className="fw-semibold">Social Growth</span>
          <span className="fw-semibold">
            Show data: <span className="stacked-bar-month">7 months</span>
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <StackedBarChart />
        </div>
      </Card.Body>
      <Card.Footer className="bg-transparent py-3 border-0">
        <div className="d-flex justify-content-center">
          <div className="container">
            <div className="row gx-2 gy-4">
              {data.datasets.map(({ label, backgroundColor }) => (
                <div className="col-12 col-lg-6" key={label}>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      className="rounded flex-shrink-0"
                      style={{
                        backgroundColor,
                        flexBasis: '20px',
                        height: '20px',
                      }}
                    ></div>
                    <div className="text-truncate ms-2">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default StackedBarChartDashboard;

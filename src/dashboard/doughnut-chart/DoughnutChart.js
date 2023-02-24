import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Paid', 'Processing', 'Pending', 'Overdue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: ['#278FD9', '#FC5C67', '#FFAFAF', '#ECE9FF'],
      borderColor: ['#278FD9', '#FC5C67', '#FFAFAF', '#ECE9FF'],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

const DoughnutChartDashboard = () => {
  return (
    <Card className="shadow-sm border-0">
      <Card.Header className="bg-transparent">
        <Card.Title>Payment Card</Card.Title>
      </Card.Header>
      <Card.Body>
        <DoughnutChart />
      </Card.Body>
      <Card.Footer className="bg-transparent">
        <div className="d-flex justify-content-center">
          {data.labels.map((label, index) => (
            <div className="d-flex align-items-center mr-3" key={label}>
              <div
                className="rounded mr-2"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  width: '30px',
                  height: '30px',
                }}
              ></div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default DoughnutChartDashboard;

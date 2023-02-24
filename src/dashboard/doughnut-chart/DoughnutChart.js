import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Paid', 'Processing', 'Pending', 'Overdue'],
  datasets: [
    {
      label: 'Payment',
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
      <Card.Body className="d-flex justify-content-center align-items-center p-5">
        <DoughnutChart />
      </Card.Body>
      <Card.Footer className="bg-transparent py-4">
        <div className="d-flex justify-content-center">
          <div className="container">
            <div className="row gy-4 gx-2">
              {data.labels.map((label, index) => (
                <div className="col-12 col-lg-6" key={label}>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      className="rounded flex-shrink-0"
                      style={{
                        backgroundColor:
                          data.datasets[0].backgroundColor[index],
                        flexBasis: '30px',
                        height: '30px',
                      }}
                    ></div>
                    <div className="text-truncate">{label}</div>
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

export default DoughnutChartDashboard;

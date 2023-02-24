import { Col, Container, Row } from 'react-bootstrap';
import DashboardParentCard from '../dashboard-card-big/DashboardParentCard';
import DoughnutChartDashboard from '../doughnut-chart/DoughnutChart';
import StackedBarChartDashboard from '../stacked-bar-chart-loan/StackedBarChart';
import { ChartData } from '../chart-data/ChartData';

const HomeDashboardContent = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <DashboardParentCard title="Overdue" />
        </Col>
        <Col md={3}>
          <div className="row g-5">
            {ChartData.map(({ title, data }) => (
              <div className="col">
                <DoughnutChartDashboard data={data} title={title} />
              </div>
            ))}

            {/* <div className="col">
              <DoughnutChartDashboard
                data={data}
                title="Loan Queries Analysis"
              />
            </div> */}

            <div className="col">
              <StackedBarChartDashboard />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeDashboardContent;

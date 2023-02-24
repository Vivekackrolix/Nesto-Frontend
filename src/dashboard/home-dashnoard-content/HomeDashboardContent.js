import { Button, Col, Container, Row } from 'react-bootstrap';
import DashboardParentCard from '../dashboard-card-big/DashboardParentCard';
import DoughnutChartDashboard from '../doughnut-chart/DoughnutChart';
import StackedBarChartDashboard from '../stacked-bar-chart-loan/StackedBarChart';
import { ChartData } from '../chart-data/ChartData';
import { HomeDashboardContentContentData } from './HomeDashboardContentData';

const HomeDashboardContent = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          {HomeDashboardContentContentData.map(({ title, cardType }, index) => (
            <DashboardParentCard
              title={title}
              cardType={cardType}
              key={title}
            />
          ))}{' '}
        </Col>
        <Col md={3}>
          <div className="row g-5">
            {ChartData.map(({ title, data }) => (
              <div className="col" key={title}>
                <DoughnutChartDashboard data={data} title={title} />
              </div>
            ))}
            <div className="col">
              <StackedBarChartDashboard />
            </div>
          </div>
        </Col>
        <Col
          md={9}
          className="d-flex justify-content-center align-items-center mt-4"
        >
          <Button className="btn-color-primary rounded-100">
            Download All Pdf
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeDashboardContent;

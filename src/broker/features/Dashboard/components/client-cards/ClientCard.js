import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { MdModeEditOutline, MdLocalPhone } from 'react-icons/md';
import { SearchFilter } from '../../../../../components';
import './ClientCard.css';
import { Link } from 'react-router-dom';
const clients = [
  {
    id: 1,
    name: 'Sameer Sharma',
    phone: '+91-95968494590',
    recentRequirement: '2 BHK, 3 BHK',
    budget: '₹ 3.94 L - 6.01 Cr',
    preferredLocation: 'Jakarta, Malang',
    recentVisit: 'Sky Apartment I 10 Jan2023',
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '234-567-8901',
    recentRequirement: 'Need a new laptop',
    budget: '$1,500',
    preferredLocation: 'San Francisco, CA',
    recentVisit: '2022-03-08',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    phone: '345-678-9012',
    recentRequirement: 'Looking to buy a house',
    budget: '$500,000',
    preferredLocation: 'Austin, TX',
    recentVisit: '2022-03-10',
  },
];

const ClientCards = ({ title, clientManagement, requirementDetails }) => {
  return (
    <>
      <section className="mt-3">
        <Container className="nes__dashboard__brok__client">
          <Row>
            <Col xs={12}>
              <SearchFilter addBtn />
            </Col>
            <Col xs={12}>
              <h1 className="section-title mb-4">{title}</h1>
            </Col>

            {/* client management */}
            {requirementDetails && (
              <Col xs={12} className="mb-3" key={clients.id}>
                <Card className="client__card border-0 mb-4">
                  <Card.Header className="bg-white d-flex justify-content-between align-items-center border-0 p-3">
                    <div className="fw-bold d-flex flex-column">
                      <span className="nes__dashboard__brok__client__name nes__dashboard__brok__client__name-title fw-bold">
                        Jaclyn Steward
                      </span>
                      <span className="text-muted fw-light">
                        Client ID:5858598543
                      </span>
                    </div>
                    <div className="d-flex align-items-center fw-bold ms-auto">
                      <div>
                        <button className="me-1 rounded-circle p-0 d-inline-flex nes__dashboard__brok__client__phone">
                          <MdLocalPhone className="m-auto" size={10} />
                        </button>{' '}
                        <span className="nes__dashboard__brok__client__phone__text">
                          +91-95968494590
                        </span>
                      </div>
                    </div>
                  </Card.Header>
                </Card>
              </Col>
            )}
            {clients.map(client => (
              <Col lg={4} md={6} className="mb-3" key={client.id}>
                <Card className="client__card border-0">
                  <Card.Header className="bg-white d-flex justify-content-between align-items-center border-0 pt-3 pb-0">
                    <div className="fw-bold ">
                      {clientManagement && (
                        <>
                          <span className="nes__dashboard__brok__client__name">
                            {client.name}
                          </span>
                          <MdModeEditOutline className="ms-1" color="#278FD9" />
                        </>
                      )}

                      {requirementDetails && (
                        <span className="nes__dashboard__brok__client__id">
                          Requirement ID: 2322232323
                        </span>
                      )}
                    </div>
                    <div className="d-flex align-items-center fw-bold">
                      {clientManagement && (
                        <div>
                          <button className="me-1 rounded-circle p-0 d-inline-flex nes__dashboard__brok__client__phone">
                            <MdLocalPhone className="m-auto" size={10} />
                          </button>{' '}
                          <span className="nes__dashboard__brok__client__phone__text">
                            {client.phone}
                          </span>
                        </div>
                      )}

                      {requirementDetails && (
                        <Link className="client__Card__link">
                          {' '}
                          Related Search{' '}
                        </Link>
                      )}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="mb-3 d-flex justify-content-between">
                      <span className="fw-normal text-muted">
                        Recent Requirement
                      </span>{' '}
                      <span className="fw-semibold">
                        {client.recentRequirement}
                      </span>
                    </Card.Text>
                    <Card.Text className="mb-3 d-flex justify-content-between">
                      <span className="fw-normal text-muted">Budget</span>{' '}
                      <span className="fw-semibold">{client.budget}</span>
                    </Card.Text>
                    <Card.Text className="mb-3 d-flex justify-content-between">
                      <span className="fw-normal text-muted">
                        Preferred Location
                      </span>{' '}
                      <span className="fw-semibold">
                        {client.preferredLocation}
                      </span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between">
                      <span className="fw-normal text-muted">
                        Recent Updated Visit
                      </span>{' '}
                      <span className="fw-semibold">{client.recentVisit}</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 d-flex justify-content-center gap-3 py-3 px-lg-3 px-xl-5">
                    <div className="flex-fill follow-up rounded-pill d-flex justify-content-center align-items-center">
                      Follow Up
                    </div>
                    <Button className="flex-fill btn-color-primary rounded-pill">
                      Visit Summary
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClientCards;

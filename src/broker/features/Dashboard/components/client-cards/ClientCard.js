import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { MdModeEditOutline, MdLocalPhone } from 'react-icons/md';

import { SearchFilter } from '../../../../../components';
import './ClientCard.css';
const clients = [
  {
    id: 1,
    name: 'John Doe',
    phone: '123-356-7890',
    recentRequirement: 'Looking for a new car',
    budget: '$30,000',
    preferredLocation: 'New York, NY',
    recentVisit: '2022-03-05',
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

const ClientCards = () => {
  return (
    <>
      <Container>
        <SearchFilter addBtn />
        <Row>
          {clients.map(client => (
            <Col lg={4} md={6} className="mb-3" key={client.id}>
              <Card className="client__card border-0">
                <Card.Header className="bg-white d-flex justify-content-between align-items-center border-0 pt-3 pb-0">
                  <div className="fw-bold">
                    {client.name} <MdModeEditOutline className="mr-2" />
                  </div>
                  <div className="d-flex align-items-center fw-bold">
                    <div>
                      <MdLocalPhone /> {client.phone}
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Text className="mb-3 d-flex justify-content-between">
                    <span className="font-weight-bold text-muted">
                      Recent Requirement
                    </span>{' '}
                    <span>{client.recentRequirement}</span>
                  </Card.Text>
                  <Card.Text className="mb-3 d-flex justify-content-between">
                    <span className="font-weight-bold text-muted">Budget</span>{' '}
                    <span>{client.budget}</span>
                  </Card.Text>
                  <Card.Text className="mb-3 d-flex justify-content-between">
                    <span className="font-weight-bold text-muted">
                      Preferred Location
                    </span>{' '}
                    <span>{client.preferredLocation}</span>
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    <span className="font-weight-bold text-muted">
                      Recent Updated Visit
                    </span>{' '}
                    <span>{client.preferredLocation}</span>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 d-flex justify-content-center gap-3 py-3">
                  <Button className="btn-color-green rounded-pill">
                    Follow Up
                  </Button>
                  <Button className="btn-color-primary rounded-pill">
                    Visit Summary
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ClientCards;

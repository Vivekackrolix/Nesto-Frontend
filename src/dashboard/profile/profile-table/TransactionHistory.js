import { Card, Table } from 'react-bootstrap';

const TransactionHistory = () => {
  return (
    <Card className="shadow-none border-0 Transactions  ">
      <Card.Header className="bg-transparent border-0">
        Example Header
      </Card.Header>
      <Card.Body>
        <Table bordered>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Transaction ID</th>
              <th>Payment Date</th>
              <th>Amount ₹</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>123</td>
              <td>2022-03-01</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>002</td>
              <td>456</td>
              <td>2022-03-02</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>003</td>
              <td>789</td>
              <td>2022-03-03</td>
              <td>3000</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TransactionHistory;

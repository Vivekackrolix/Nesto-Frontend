import { Table } from "react-bootstrap";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  return (
    <>
    <h3 style={{marginBottom: "15px" }}>
        Transactions
      </h3>
    
    <Table
      className="profile__transaction"
      style={{ border: "1.39082px solid #E9E9E9" }}
    >
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
          <td>324243235532</td>
          <td>324243235532</td>
          <td>10/12/2022</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>324243235532</td>
          <td>324243235532</td>
          <td>10/12/2022</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>324243235532</td>
          <td>324243235532</td>
          <td>10/12/2022</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>324243235532</td>
          <td>324243235532</td>
          <td>10/12/2022</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>324243235532</td>
          <td>324243235532</td>
          <td>10/12/2022</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>324243235532</td>
          <td>324243235532</td>
          <td>10/12/2022</td>
          <td>2000</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};

export default TransactionHistory;

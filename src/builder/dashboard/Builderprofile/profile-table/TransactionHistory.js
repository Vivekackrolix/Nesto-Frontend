import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const [data, setData] = useState([]); //Later use redux
  useEffect(() => {
    const getVisit = async () => {
      const response = await axios.get(
        // "http://13.233.149.97:3000/api/v1/visit/getAllVisit?propertyId=641bf437067c659dc0be278c&isPromoted=false&builderId=641c31c0e55383765452d174",
        "http://localhost:3000/api/v1/payment/getPaymentById?id=6411a9cf52af4e7966b5d5e2",
        // formData,
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;

      console.log(response.data.data);
      setData(response.data.data);
    };

    getVisit();
  }, []);

  const paymentData = data.map((itm) => (
    <tr>
      <td>123</td>
      <td>{itm.transactionId}</td>
      <td>{itm.transactionDate}</td>
      <td>{itm.transactionAmount}</td>
    </tr>
  ));
  return (
    <>
      <h3 className="mb-2">Transactions</h3>

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
        <tbody>{paymentData}</tbody>
      </Table>
    </>
  );
};

export default TransactionHistory;

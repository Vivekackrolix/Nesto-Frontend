import { useState } from 'react';
import {
  BookAVisitModal,
  BrokerView,
  CustomerModal,
  CustomerView,
  Footer,
  Header,
  ShareModal,
  SuccessModal,
  VisitAlertModal,
  PromotedProperty,
} from '../features';
import '../features/Dashboard/assets/styles/Dashboard.css';
import ClientCards from '../features/Dashboard/components/client-cards/ClientCard';

const DashboardPage = () => {
  const [show, setShow] = useState(true);
  const onHide = () => {
    setShow(false);
  };
  return (
    <>
      {/* popup modal */}
      {/* <ShareModal show={show} onHide={onHide} /> */}
      {/* <ShareModal show={show} onHide={onHide} />
        <BookAVisitModal show={show} onHide={onHide} /> */}
      {/* <SuccessModal show={show} onHide={onHide} /> */}
      {/* <VisitAlertModal show={show} onHide={onHide} /> */}
      {/* <CustomerModal show={show} onHide={onHide} /> */}
      {/* popup modal code end here */}

      <div className="nes__dashboard__brok__app d-flex flex-column min-vh-100">
        {/* Header */}
        <Header />
        {/* Header code end here */}

        {/* Main Content code start here */}
        <main className="nes__broker__dashboard">
          {/* <BrokerView /> */}
          {/* <CustomerView /> */}
          {/* <PromotedProperty /> */}
          {/* Client Management */}
          <ClientCards />
        </main>
        {/* Main content code end here */}

        {/* footer code start here */}
        <Footer />
        {/* footer code end here */}
      </div>
    </>
  );
};

export default DashboardPage;

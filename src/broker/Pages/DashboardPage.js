import { useState } from 'react';
import {
  BookAVisitModal,
  BrokerView,
  CustomerModal,
  Footer,
  Header,
  ShareModal,
  SuccessModal,
  VisitAlertModal,
} from '../features';
import '../features/Dashboard/assets/styles/Dashboard.css';

const DashboardPage = () => {
  const [show, setShow] = useState(true);
  const onHide = () => {
    setShow(false);
  };
  return (
    <>
      <div className="nes__broker__Dashboard">
        {/* popup modal */}
        {/* <ShareModal show={show} onHide={onHide} /> */}
        {/* <ShareModal show={show} onHide={onHide} />
        <BookAVisitModal show={show} onHide={onHide} /> */}
        {/* <SuccessModal show={show} onHide={onHide} /> */}
        {/* <VisitAlertModal show={show} onHide={onHide} /> */}
        {/* <CustomerModal show={show} onHide={onHide} /> */}
        {/* popup modal code end here */}
        <Header />
        {/* dashbaord page main content start here */}
        <main className="nes__broker__dashboard">
          {/* Broker View Page*/}
          <BrokerView />
          {/* Broker View Page code end here */}
        </main>
        {/* dashboard page main content end here */}

        <Footer />
      </div>
    </>
  );
};

export default DashboardPage;

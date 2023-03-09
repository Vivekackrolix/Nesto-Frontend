import { useState } from 'react';
import {
  BookAVisitModal,
  CustomerModal,
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
        <CustomerModal show={show} onHide={onHide} />
        {/* popup modal code end here */}
      </div>
    </>
  );
};

export default DashboardPage;

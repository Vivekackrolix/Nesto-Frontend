import { useState } from 'react';
import { BookAVisitModal, ShareModal } from '../features';
import '../features/Dashboard/assets/styles/Dashboard.css';

const DashboardPage = () => {
  const [show, setShow] = useState(true);
  const onHide = () => {
    setShow(false);
  };
  return (
    <>
      {/* popup modal */}
      <ShareModal show={show} onHide={onHide} />
      <BookAVisitModal show={show} onHide={onHide} />
      {/* popup modal code end here */}
    </>
  );
};

export default DashboardPage;

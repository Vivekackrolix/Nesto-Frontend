import { useState } from 'react';
import { ShareModal } from '../features';
import '../features/Dashboard/assets/styles/Dashboard.css';

const DashboardPage = () => {
  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };
  return (
    <>
      <div>DashboardPage</div>
      <ShareModal show={show} onHide={onHide} />
    </>
  );
};

export default DashboardPage;

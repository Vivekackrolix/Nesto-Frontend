import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
  BrokerageManagement,
  Claim,
} from '../../features';
import '../../features/Dashboard/assets/styles/Dashboard.css';
import ClientCards from '../../features/Dashboard/components/client-cards/ClientCard';
import { clientsData } from '../../data/Constant';
import ProfilePage from '../../dashboard-containers/broker-profile/Profile';
import { setToken, setBrokerID } from '../../store/authSlice';
import { setAuthToken } from '../../services/api';

const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const brokerID = localStorage.getItem('brokerID');

    if (token && brokerID) {
      dispatch(setToken(token));
      setAuthToken(token);
      dispatch(setBrokerID(brokerID));
    }
  }, [dispatch]);
  return (
    <>
      {/* popup modal */}
      {/* <ShareModal show={show} onHide={onHide} /> */}
      {/* <ShareModal show={show} onHide={onHide} /> */}
      {/* <BookAVisitModal show={true} /> */}
      {/* <SuccessModal show={show} onHide={onHide} /> */}
      {/* <VisitAlertModal show={show} onHide={onHide} /> */}
      {/* <CustomerModal show={show} onHide={onHide} /> */}
      {/* popup modal code end here */}

      <div className="nes__dashboard__brok__app d-flex flex-column min-vh-100">
        <Header />
        {/* Main Content code start here */}
        <main className="nes__broker__dashboard">
          <BrokerView />
          {/* <CustomerView /> */}
          {/* <PromotedProperty /> */}

          {/* Client Management */}
          {/* <ClientCards
            title="Client Management"
            clientManagement
            clientData={clientsData}
          /> */}

          {/* requirements */}
          {/* <ClientCards
            title="Requirement Details"
            requirementDetails
            clientsData={clientsData}
          /> */}

          {/* Brokerage Management */}
          {/* <BrokerageManagement />

          {/* Claim */}
          {/* <Claim /> */}

          {/* property details page */}
          {/* <PropertyDetails /> */}

          {/* Profile page */}
          {/* <ProfilePage /> */}
        </main>
        {/* Main content code end here */}
        <Footer />
      </div>
    </>
  );
};

export default DashboardPage;

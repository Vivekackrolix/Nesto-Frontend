import DashboardChildCard from '../../dashboard-card-big/DashboardChildCard';
import DashboardTabs from '../../dashboard-tabs/DashboardTabs';

const tabKey = ['All', 'Assigned ', ' Matured', 'Not Matured'];
const tabKey2 = ['Accept', 'Deny'];
const QueriesHistory = () => {
  return (
    <DashboardTabs tabsKey={tabKey}>
      <DashboardTabs tabsKey={tabKey}>
        <DashboardChildCard cardType="acceptedLoanQueries" />
      </DashboardTabs>
    </DashboardTabs>
  );
};

export default QueriesHistory;

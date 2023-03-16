// import DashboardTabs from '../../dashboard-tabs/DashboardTabs';
import { Container } from 'react-bootstrap';
import AccordionCard from '../accordion/AccordionCard';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';
import Community from '../community/Community';

const tabKey = ['Support', 'FAQ', 'Community'];
const Support = () => {
  return (
    <>
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <AccordionCard
          tabKey={tabKey[0]}
          itemLength={4}
          accordionTitle="What is App flow and why is the best App?"
          accordionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <AccordionCard
          tabKey={tabKey[1]}
          itemLength={4}
          accordionTitle="What is App flow and why is the best App FAQ?"
          accordionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Community tabKey={tabKey[2]} />
      </DashboardTabs>
    </>
  );
};

export default Support;

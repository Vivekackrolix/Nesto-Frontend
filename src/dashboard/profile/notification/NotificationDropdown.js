import { Dropdown, Button } from 'react-bootstrap';
import { FiBell } from 'react-icons/fi';
import './NotificationDropdown.css'; // add any additional CSS styles here
import ShadowCard from '../shadow-card/ShadowCard';

const NotificationDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Button}
        variant="link"
        className="p-0 notification-dropdown__toggle"
      >
        <FiBell />
      </Dropdown.Toggle>

      <Dropdown.Menu className="notification-dropdown__menu">
        <Dropdown.Header>Notifications</Dropdown.Header>
        <Dropdown.Divider />
        <ShadowCard
          itemLength={3}
          title="Loreum ipsum dolor sit amet, consectetur elit"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut."
        />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;

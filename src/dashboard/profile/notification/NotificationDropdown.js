import { Dropdown, Button } from 'react-bootstrap';
import { FiBell } from 'react-icons/fi';
import ShadowCard from '../shadow-card/ShadowCard';
import './NotificationDropdown.css';
import { Link } from 'react-router-dom';
const NotificationDropdown = () => {
  return (
    <Dropdown align="end" className="notification">
      <Dropdown.Toggle
        as={Button}
        variant="link"
        className="p-0"
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        <FiBell size={20} />
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="notification__menu border-0 shadow-sm"
        style={{ width: '350px' }}
      >
        <Dropdown.Header className="pb-0">Notifications</Dropdown.Header>

        <ShadowCard
          itemLength={3}
          title="Loreum ipsum dolor sit amet, consectetur elit"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut."
        />

        <div class="bg-white d-flex justify-content-center align-items-center my-2 view-all">
          <Link className="text-decoration-none"> View All</Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;

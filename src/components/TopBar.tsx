import { Component, ReactNode } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default class TopBar extends Component {
  render(): ReactNode {
    return (
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary padding-24"
        style={{ paddingLeft: 24, paddingRight: 24 }}
      >
        <Navbar.Brand href="#home">Universe</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Add</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

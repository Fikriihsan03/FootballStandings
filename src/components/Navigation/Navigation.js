import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Klasemen API</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Klasemen</Nav.Link>
            <Nav.Link href="#pricing">Jadwal pertandingan</Nav.Link>
            <NavDropdown title="Pilih Liga" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Liga inggris
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Liga jerman
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">La Liga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Serie A</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navigation;

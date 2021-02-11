import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = ({ changeCode }) => {
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
              <NavDropdown.Item onClick={() => changeCode("4328")}>
                Liga inggris
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeCode("4331")}>
                BundlesLiga
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeCode("4335")}>
                {" "}
                La Liga
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeCode("4332")}>
                Serie A
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navigation;

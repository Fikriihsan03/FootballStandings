import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = ({ changeCode }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" className={classes.Link}>
            Klasemen API
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className={classes.Link}>
                Klasemen
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/jadwal-pertandingan" className={classes.Link}>
                Jadwal pertandingan
              </Link>
            </Nav.Link>
            <NavDropdown title="Pilih Liga" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => changeCode("4328")}>
                Premiere League
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

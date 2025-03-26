import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react';
import { FilterContext, ThemeContext } from './context';

function NavContainer() {
  const { searchTerm, setSearchTerm } = useContext(FilterContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" bg={theme} data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home">EpicBook!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Cerca</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Cerca un libro..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Cerca un libro"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Nav>
          <button onClick={toggleTheme} className="btn btn-secondary">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;

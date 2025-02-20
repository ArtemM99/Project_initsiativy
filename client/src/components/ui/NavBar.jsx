import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';


function NavBar({ handleFilterSelect }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <title>Инициативы</title>
        <Navbar.Brand>Инициативы.ru</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Фильтр"
              menuVariant="dark"
            >
              <NavDropdown.Item key="all" onClick={() => handleFilterSelect('')}>
                Все тематики
              </NavDropdown.Item>
              <NavDropdown.Item
                key="ecology"
                onClick={() => handleFilterSelect('Экология')}
              >
                Экология
              </NavDropdown.Item>
              <NavDropdown.Item
                key="healthcare"
                onClick={() => handleFilterSelect('Здравоохранение')}
              >
                Здравоохранение
              </NavDropdown.Item>
              <NavDropdown.Item
                key="transport"
                onClick={() => handleFilterSelect('Транспорт')}
              >
                Транспорт
              </NavDropdown.Item>
              <NavDropdown.Item
                key="education"
                onClick={() => handleFilterSelect('Образование')}
              >
                Образование
              </NavDropdown.Item>
              <NavDropdown.Item
                key="social"
                onClick={() => handleFilterSelect('Социальная защита')}
              >
                Социальная защита
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/">
              Главная страница
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Войти
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Регистрация
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

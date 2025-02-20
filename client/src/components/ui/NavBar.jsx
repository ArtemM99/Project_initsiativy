import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router';


export default function NavBar({ user }) {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Инициативы.ru</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Главная страница
            </Nav.Link>
            {user ? (
              <div className="d-flex align-items-center gap-3">
                <span className="text-white">Привет, {user.firstName}</span>
                <Button variant="outline-light" >
                  Выйти
                </Button>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Button onClick={() => navigate('/login')}>
                  Вход
                </Button>
                <Button onClick={() => navigate('/register')} >
                  Регистрация
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavBar;

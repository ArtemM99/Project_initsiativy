import React from 'react';
import { Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import { NavDropdown } from 'react-bootstrap';

export default function Layout({ user, handleFilterSelect, logoutHandler}) {
  
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <title>Инициативы</title>
          <Navbar.Brand>Инициативы.ru</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Главная страница
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link>Привет, {user.firstName}</Nav.Link>
                  <Nav.Link onClick={logoutHandler}>
                    Выйти
                  </Nav.Link>
                </>
              ) : (
                <>
              <Nav.Link as={Link} to="/login">
                Войти
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Регистрация
              </Nav.Link>
              </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet handleFilterSelect={handleFilterSelect} />
    </div>
  );
}
